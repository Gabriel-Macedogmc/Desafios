import { Request, Response, NextFunction } from 'express';
import AppError from '../errors/appError';

export default function ExceptionError(
  err: Error,
  req: Request,
  res: Response,
  _: NextFunction,
) {
  if (err instanceof AppError) {
    return res.status(err.statusCode).json({
      status: 'error',
      message: err.message,
    });
  }

  console.error(err);

  return res.status(500).json({
    error: 'error',
    message: 'internal server error',
  });
}
