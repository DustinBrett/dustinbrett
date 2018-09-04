import { Schema, model } from 'mongoose';

const postSchema = new Schema({
  date: {
    type: Date,
    default: Date.now
  },
  id: Number,
  data: Object
});

export default model('Post', postSchema);
