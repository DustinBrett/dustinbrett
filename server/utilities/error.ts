import { Request, Response, NextFunction } from 'express';

const logError = (error: Error, request?: Request): void => {
  console.log(error, request);
};

export const errorHandler = (err: Error, req?: Request, res?: Response, next?: NextFunction): void => {
  if (res) {
    res.send({ message: err.message });
  }

  logError(err, req);

  if (next) {
    next();
  }
};
