import nc from 'next-connect';
import { isAdmin, isAuth } from '../../../../utils/auth';
import Product from '../../../../models/Product';
import db from '../../../../utils/db';

const handler = nc();
handler.use(isAuth, isAdmin);

handler.get(async (req, res) => {
  await db.connect();
  const products = await Product.find({});
  await db.disconnect();
  res.send(products);
});

handler.post(async (req, res) => {
  await db.connect();
  const newProduct = new Product({
    name: 'nome exame',
    slug: 'examplo slug' + Math.random(),
    image: '/mamografia.png',
    recomendacao1: 'simples recomendação',
    recomendacao2: 'simples recomendação',
    recomendacao3: 'simples recomendação',
    description: 'simples descrição',
  });

  const product = await newProduct.save();
  await db.disconnect();
  res.send({ message: 'Exame Criado', product });
});

export default handler;
