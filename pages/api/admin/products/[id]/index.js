import nc from 'next-connect';
import { isAdmin, isAuth } from '../../../../../utils/auth';
import Product from '../../../../../models/Product';
import db from '../../../../../utils/db';

const handler = nc();
handler.use(isAuth, isAdmin);

handler.get(async (req, res) => {
  await db.connect();
  const product = await Product.findById(req.query.id);
  await db.disconnect();
  res.send(product);
});

handler.put(async (req, res) => {
  await db.connect();
  const product = await Product.findById(req.query.id);
  if (product) {
    product.name = req.body.name;
    product.slug = req.body.slug;
    product.featuredImage = req.body.featuredImage;
    product.isFeatured = req.body.isFeatured;
    product.image = req.body.image;
    product.recomendacao1 = req.body.recomendacao1;
    product.recomendacao2 = req.body.recomendacao2;
    product.recomendacao3 = req.body.recomendacao3;
    product.description = req.body.description;
    await product.save();
    await db.disconnect();
    res.send({ message: 'Exame atualizado com sucesso!' });
  } else {
    await db.disconnect();
    res.status(404).send({ message: 'Exame não encontrado' });
  }
});

handler.delete(async (req, res) => {
  await db.connect();
  const product = await Product.findById(req.query.id);
  if (product) {
    await product.remove();
    await db.disconnect();
    res.send({ message: 'Exame Deletado' });
  } else {
    await db.disconnect();
    res.status(404).send({ message: 'Exame não encontrado' });
  }
});

export default handler;
