import { Request, Response, NextFunction } from 'express';
import { verify } from 'jsonwebtoken';

import { IJwtTokenPayload } from '../dto/user/IJwtTokenPayload';

export function handleUserAuthToken(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const { authorization } = req.headers;

  if (!authorization) {
    return res.status(401).json({ error: 'Missing token' });
  }

  const jwtSecretKey = process.env.JWT_SECRET_KEY || '';

  const [bearer, token] = authorization.split(' ');

  if (bearer !== 'Bearer' || !token) {
    return res.status(401).json({ error: 'Malformed token' });
  }

  try {
    const { sub } = verify(token, jwtSecretKey) as IJwtTokenPayload;
    req.userId = sub;
    return next();
  } catch (error) {
    return res.status(401).json({ error: 'Invalid or expired token' });
  }
}
