import { Router, Request, Response } from 'express';

import { logError } from '../utilities/error';

import Post, { IPost, postProjection } from '../models/post';

export default {

  path: '/posts',

  handler: ((): Router => {
    const getPosts = (req: Request, res: Response): void => {
      Post.find(
        { id: req.params.id || { $exists : true } },
        postProjection,
        (err, posts: Array<IPost>) => { logError(err); res.send(posts); }
      );
    };

    return Router()
      .get('/', getPosts)
      .get('/:id', getPosts)
    ;
  })()

};
