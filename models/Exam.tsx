import mongoose from 'mongoose';


const examSchema = new mongoose.Schema(
  {name: { type: String, required: true },
  slug: { type: String, required: true, unique: true },
  featuredImage: { type: String },
  isFeatured: { type: Boolean, required: true, default: false },
  image: { type: String, required: true },
  recomendacao1: { type: String, required: true },
  recomendacao2: { type: String, required: true },
  recomendacao3: { type: String, required: true },
  description: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

const Exam =
  mongoose.models.Exam || mongoose.model('Exam', examSchema);
export default Exam;
