import mongoose from 'mongoose';
const { Schema } = mongoose;

const filmSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },
    director: {
      type: String,
      required: true,
      trim: true,
    },
    releaseDate: {
      type: Date,
      required: true,
    },
    genre: {
      type: String,
      required: true,
    },
    summary: {
      type: String,
      required: true,
      trim: true,
    },
    imageUrl: {
      type: String,
      required: true,
    },
    favorite: {
      type: Boolean,
      default: false,
    },
    owner: {
      // date stored in owner is going to be ObjectID
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      // ref creates a reference between this field and another model
      ref: 'User',
    },
  },
  {
    timestamps: true,
  }
);

// create the film model
const Film = mongoose.model('Film', filmSchema);

// export the film model
export { Film };
