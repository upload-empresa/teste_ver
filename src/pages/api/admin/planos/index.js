import nc from 'next-connect';
import { isAdmin, isAuth } from '../../../../utils/auth';
import Plano from '../../../../models/Plano';
import db from '../../../../utils/db';

const handler = nc();
handler.use(isAuth, isAdmin);

handler.get(async (req, res) => {
  await db.connect();
  const planos = await Plano.find({});
  await db.disconnect();
  res.send(planos);
});

handler.post(async (req, res) => {
  await db.connect();
  const newPlano = new Plano({
    name: 'nome plano',
    image: '/bralogo.png',
  });

  const plano = await newPlano.save();
  await db.disconnect();
  res.send({ message: 'Exame Criado', plano });
});

export default handler;
