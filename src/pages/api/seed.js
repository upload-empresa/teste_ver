import nc from 'next-connect'
import db from '../../utils/db'
import Exam from '../../models/Exam'
import Product from '../../models/Product'
import data from '../../utils/data'
import User from '../../models/User'
import Plano from '../../models/Plano'

const handler = nc()

handler.get(async (req, res) => {
  // return res.send({ message: 'already seeded' })
  await db.connect()
  // await User.insertMany(data.users)
//   await User.deleteMany()
  // await Exam.insertMany(data.exams)
  // await Exam.deleteMany()
  // await Product.insertMany(data.products)
  // await Product.deleteMany()
  // await Plano.insertMany(data.planos)
  // await Plano.deleteMany()
  await db.disconnect()
  res.send({ message: 'seeded successfully' })
})

export default handler
