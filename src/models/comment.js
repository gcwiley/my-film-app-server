import mongoose from 'mongoose';
const { Schema } = mongoose;

const commentSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },
    description: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
    submittedBy: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

// create the comment model
const Comment = mongoose.model('Comment', commentSchema);

// export the comment model
export { Comment };
