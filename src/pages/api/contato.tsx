/* eslint-disable import/no-duplicates */
import { query as q } from 'faunadb';
import type { NextApiRequest, NextApiResponse } from 'next';
import { format } from 'date-fns';
import { ptBR } from 'date-fns/locale';
import { fauna } from '../../services/faunadb';

export default async (req: NextApiRequest, res: NextApiResponse) => {
  await fauna.query(
    q.Create(q.Collection('mensagens'), {
      data: {
        pagina: req.body.pagina,
        nome: req.body.nome.toUpperCase(),
        empresa: req.body.empresa.toUpperCase(),
        email: req.body.email.toLowerCase(),
        municipio: req.body.municipio.toUpperCase(),
        uf: req.body.uf.toUpperCase(),
        celular: req.body.celular,
        createdAt: format(new Date(), 'yyyy-MM-dd HH:mm:ss', {
          locale: ptBR,
        }),
      },
    }),
  );

  return res.status(200).json(req.body);
};
