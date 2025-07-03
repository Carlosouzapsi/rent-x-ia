import { Request, Response } from 'express';
import { AuthenticateUseCase } from './AuthenticateUseCase';
import { container } from 'tsyringe';

class AuthenticateUserController {
  async handle(request: Request, response: Response) {
    const { email, password } = request.body;

    const authenticateUserUseCase = container.resolve(AuthenticateUseCase);

    const token = await authenticateUserUseCase.execute({
      email,
      password,
    });

    return response.json(token);
  }
}

export { AuthenticateUserController };
