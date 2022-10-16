import nc from 'next-connect';
import { isAdmin, isAuth } from '../../../../../utils/auth';
import Plano from '../../../../../models/Plano';
import db from '../../../../../utils/db';

const handler = nc();
handler.use(isAuth, isAdmin);

handler.get(async (req, res) => {
  await db.connect();
  const plano = await Plano.findById(req.query.id);
  await db.disconnect();
  res.send(plano);
});

handler.put(async (req, res) => {
  await db.connect();
  const plano = await Plano.findById(req.query.id);
  if (plano) {
    plano.name = req.body.name;
    plano.featuredImage = req.body.featuredImage;
    plano.isFeatured = req.body.isFeatured;
    plano.image = req.body.image;
    await plano.save();
    await db.disconnect();
    res.send({ message: 'Plano atualizado com sucesso!' });
  } else {
    await db.disconnect();
    res.status(404).send({ message: 'Plano não encontrado' });
  }
});

handler.delete(async (req, res) => {
  await db.connect();
  const plano = await Plano.findById(req.query.id);
  if (plano) {
    await plano.remove();
    await db.disconnect();
    res.send({ message: 'Plano Deletado' });
  } else {
    await db.disconnect();
    res.status(404).send({ message: 'Plano não encontrado' });
  }
});

export default handler;
