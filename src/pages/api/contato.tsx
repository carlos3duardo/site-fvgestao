/* eslint-disable import/no-duplicates */
import { query as q } from 'faunadb';
import type { NextApiRequest, NextApiResponse } from 'next';
import nodemailer from 'nodemailer';
import fs from 'fs';
import path from 'path';
import { format } from 'date-fns';
import { ptBR } from 'date-fns/locale';
import { fauna } from '../../services/faunadb';

export default async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    // const filePath =
    //   process.env.NODE_ENV === 'production'
    //     ? path.resolve('layouts', 'email-contato')
    //     : path.resolve('public', 'layouts', 'email-contato');

    const filePath =
      process.env.NODE_ENV === 'production'
        ? path.join('layouts', 'email-contato')
        : path.join('public', 'layouts', 'email-contato');

    let msgHtml = fs.readFileSync(`${filePath}.html`, 'utf8');
    let msgText = fs.readFileSync(`${filePath}.txt`, 'utf8');

    msgHtml = msgHtml.replace('{nome}', req.body.nome.toUpperCase());
    msgHtml = msgHtml.replace('{empresa}', req.body.empresa.toUpperCase());
    msgHtml = msgHtml.replace('{email}', req.body.email.toLowerCase());
    msgHtml = msgHtml.replace('{municipio}', req.body.municipio.toUpperCase());
    msgHtml = msgHtml.replace('{uf}', req.body.uf.toUpperCase());
    msgHtml = msgHtml.replace('{celular}', req.body.celular);
    msgHtml = msgHtml.replace('{pagina}', req.body.pagina);

    msgText = msgText.replace('{nome}', req.body.nome.toUpperCase());
    msgText = msgText.replace('{empresa}', req.body.empresa.toUpperCase());
    msgText = msgText.replace('{email}', req.body.email.toLowerCase());
    msgText = msgText.replace('{municipio}', req.body.municipio.toUpperCase());
    msgText = msgText.replace('{uf}', req.body.uf.toUpperCase());
    msgText = msgText.replace('{celular}', req.body.celular);
    msgText = msgText.replace('{pagina}', req.body.pagina);

    const transport = nodemailer.createTransport({
      host: process.env.MAIL_HOST,
      port: Number(process.env.MAIL_PORT) || 25,
      auth: {
        user: process.env.MAIL_USERNAME,
        pass: process.env.MAIL_PASSWORD,
      },
    });

    await transport.sendMail({
      from: `Site FV Gestão <${process.env.MAIL_SENDER}>`,
      to: process.env.MAIL_TO || 'contato@fvgestao.com.br',
      subject: 'FV Gestão - Mensagem do site',
      text: msgText,
      html: msgHtml,
    });

    // await fauna.query(
    //   q.Create(q.Collection('mensagens'), {
    //     data: {
    //       pagina: req.body.pagina,
    //       nome: req.body.nome.toUpperCase(),
    //       empresa: req.body.empresa.toUpperCase(),
    //       email: req.body.email.toLowerCase(),
    //       municipio: req.body.municipio.toUpperCase(),
    //       uf: req.body.uf.toUpperCase(),
    //       celular: req.body.celular,
    //       createdAt: format(new Date(), 'yyyy-MM-dd HH:mm:ss', {
    //         locale: ptBR,
    //       }),
    //     },
    //   }),
    // );

    return res.status(200).json(req.body);
  } catch (err) {
    return res.status(500).json(err);
  }
};
