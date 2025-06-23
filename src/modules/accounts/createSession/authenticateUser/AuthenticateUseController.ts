import { Request, Response } from 'express';

class AuthenticateUserController {
  async handle(request: Request, response: Response) {
    const { email, password } = request.body;
  }
}

export { AuthenticateUserController };
