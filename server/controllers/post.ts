import { Router, Request, Response } from 'express';

import { default as Post } from '../models/post';

export default {

  path: '/post',

  handler: ((): Router => {
    const postById = (req: Request, res: Response): void => {
      res.send(Post.findById(req.params.id).then(JSON.stringify));
    };

    return Router()
      .get('/:id/data', postById)
    ;
  })()

};
