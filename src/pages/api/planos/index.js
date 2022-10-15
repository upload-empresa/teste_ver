import nc from 'next-connect';
import Plano from '../../../models/Plano';
import db from '../../../utils/db';

const handler = nc();

handler.get(async (req, res) => {
  await db.connect();
  const planos = await Plano.find({});
  await db.disconnect();
  res.send(planos);
});

export default handler;