import { Request, Response, NextFunction } from 'express';

const logError = (error: any, request: Request): void => {
  console.log(error, request);
};

export const fallbackErrorHandler = (err: any, req: Request, res: Response, next: NextFunction): void => {
  res.send({ message: err.message });
  logError(err, req);
  next();
};
