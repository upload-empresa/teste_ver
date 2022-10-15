import nc from 'next-connect';
import Exam from '../../../models/Exam';
import db from '../../../utils/db';

const handler = nc();

handler.get(async (req, res) => {
  await db.connect();
  const exams = await Exam.find({});
  await db.disconnect();
  res.send(exams);
});

export default handler;