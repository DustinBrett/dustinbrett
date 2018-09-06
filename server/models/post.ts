import { Schema, model } from 'mongoose';

const postSchema = new Schema({
  body: String,
  created: {
    type: Date,
    default: Date.now
  },
  id: Number,
  posted: Date,
  title: String
});

export interface IPost {
  body: string;
  created?: number;
  id?: number;
  posted: number;
  title: string;
}

export const postProjection = {
  _id: 0, __v: 0, date: 0
};

export default model('Post', postSchema);
