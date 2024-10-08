import { NextFunction, Request, Response } from 'express';

import { ApplicationErrors } from '../errors/ApplicationErrors';

export function handleExceptions(
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction
) {
  if (err instanceof ApplicationErrors) {
    return res
      .status(err.statusCode)
      .json({ message: err.message, statusCode: err.statusCode });
  }

  return res.status(500).json({
    status: 'Error',
    message: 'Server internal error',
  });
}
