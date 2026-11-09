/* eslint-disable import/no-duplicates */
import axios from 'axios';
import type { NextApiRequest, NextApiResponse } from 'next';
import { connect } from 'node-mailjet';

async function recaptchaValido(
  token: unknown,
  remoteip?: string,
): Promise<boolean> {
  const secret = process.env.RECAPTCHA_SECRET_KEY;
  if (!secret || typeof token !== 'string' || !token) return false;

  const params = new URLSearchParams({ secret, response: token });
  if (remoteip) params.append('remoteip', remoteip);

  try {
    const { data } = await axios.post(
      'https://www.google.com/recaptcha/api/siteverify',
      params.toString(),
      { headers: { 'Content-Type': 'application/x-www-form-urlencoded' } },
    );
    return data?.success === true;
  } catch {
    return false;
  }
}

export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).json({ message: 'Método não permitido.' });
  }

  const ip = String(req.headers['x-forwarded-for'] || '')
    .split(',')[0]
    .trim();
  if (
    !(await recaptchaValido(
      req.body?.recaptchaToken,
      ip || req.socket.remoteAddress,
    ))
  ) {
    return res
      .status(400)
      .json({ message: 'Falha na verificação do reCAPTCHA.' });
  }

  try {
    const mailjet = connect(
      process.env.MJ_APIKEY_PUBLIC,
      process.env.MJ_APIKEY_PRIVATE,
    );

    const request = mailjet.post('send', { version: 'v3.1' }).request({
      Messages: [
        {
          From: {
            Email: process.env.MAIL_SENDER,
            Name: 'Site FV Gestão',
          },
          To: [
            {
              Email: process.env.MAIL_TO || 'site@fvgestao.com.br',
              Name: 'Contato FV Gestão',
            },
          ],
          TemplateID: Number(process.env.MJ_TEMPLATE_ID_CONTATO) || 0,
          TemplateLanguage: true,
          Subject: 'FV Gestão - Mensagem do site',
          Variables: {
            nome: req.body.nome.toUpperCase(),
            empesa: req.body.empresa.toUpperCase(),
            email: req.body.email.toLowerCase(),
            municipio: req.body.municipio.toUpperCase(),
            uf: req.body.uf.toUpperCase(),
            celular: req.body.celular,
            origem: req.body.pagina,
          },
        },
      ],
    });

    await request
      .then(() => {
        return req.body;
      })
      .catch(err => {
        return err;
      });

    return res.status(200).json({
      message: 'Mensagem enviada com sucesso!',
      data: req.body,
    });
  } catch (err) {
    return res.status(500).json({
      message: 'Erro que não sei ainda.',
    });
  }
};
