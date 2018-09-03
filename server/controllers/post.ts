import { Router, Request, Response } from 'express';

import { default as Post } from '../models/post';

export default {

  path: '/post',

  handler: ((): Router => {
    const dataRoute = (req: Request, res: Response): void => {
      Post.Find(
        [{
          $match: {
            name: { $eq: req.params.post },
            data: { $exists: true }
          }
        }],
        (results: any) => {
          console.log(results);
          res.send(results);
        }
      );
    };

    return Router()
      .get('/:post/data', dataRoute)
    ;
  })()

};
