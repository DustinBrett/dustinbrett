import { Model, Document, Schema, model } from 'mongoose';

interface IPost extends Model<Document> {
  Find: (query: Array<Object>, callback: Function) => Promise<any[]>;
}

const PostSchema = new Schema({
  date: {
    type: Date,
    default: Date.now
  },
  name: String,
  data: Object
});

PostSchema.statics.Find = function (query: Array<Object>, callback: Function): Promise<any[]> {
  const project = { $project: { _id: 0, __v: 0, name: 0 } };

  return this.aggregate([ ...query, project ], (err: any, results: any) => callback(results)); // TODO: Error check
};

export default model<Document, IPost>('Post', PostSchema);
