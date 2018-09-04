import { Router, Request, Response } from 'express';

import Post from '../models/post';

const postProjection = {
  _id: 0, __v: 0, date: 0
};

export default {

  path: '/posts',

  handler: ((): Router => {
    const allPosts = (req: Request, res: Response): void => {
      Post.find({ data: { $exists : true } }, postProjection, (err, doc) => res.send(doc));
    };

    const postById = (req: Request, res: Response): void => {
      Post.find({ id: parseInt(req.params.id) }, postProjection, (err, doc) => res.send(doc));
    };

    return Router()
      .get('/', allPosts)
      .get('/:id', postById)
    ;
  })()

};
