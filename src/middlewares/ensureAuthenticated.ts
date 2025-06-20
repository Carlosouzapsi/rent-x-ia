import { UsersRepository } from '../modules/accounts/repositories/implementations/UsersRepository';
import { NextFunction, Request, Response } from 'express';
import { verify } from 'jsonwebtoken';

interface IPayload {
  sub: string;
}

export async function ensureAuthenticated(
  request: Request,
  response: Response,
  next: NextFunction
) {
  const authHeader = request.headers.authorization;

  if (!authHeader) {
    throw new Error('Token is required');
  }

  const [, token] = authHeader.split(' ');
  // passar o secret para o .env
  try {
    const decoded = verify(token, '1234567890');

    const { sub: user_id } = decoded as IPayload;

    const usersRepository = new UsersRepository();

    const user = await usersRepository.findById(user_id);

    if (!user) {
      throw new Error('User does not exist');
    }

    next();
  } catch (error) {
    throw new Error('Invalid token');
  }
}
