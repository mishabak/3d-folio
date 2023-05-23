
import mongoose from 'mongoose'
const imageSchema = new mongoose.Schema({
    image: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
  });
export const YourModel2 = mongoose.models.galleries || mongoose.model("galleries", imageSchema);
