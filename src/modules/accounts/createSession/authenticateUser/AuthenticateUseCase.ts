import { compare } from 'bcrypt';
import { inject, injectable } from 'tsyringe';
import { sign } from 'jsonwebtoken';
import { IUsersRepository } from '../../repositories/IUsersRepository';

interface IRequest {
  email: string;
  password: string;
}

interface IResponse {
  user: {
    name: string;
    email: string;
  };
  token: string;
}

@injectable()
class AuthenticateUseCase {
  constructor(
    @inject('UsersRepository')
    private userRepository: IUsersRepository
  ) {}

  async execute({ email, password }: IRequest): Promise<IResponse> {
    const user = await this.userRepository.findByEmail(email);

    if (!user) {
      throw new Error('Email or password incorrect');
    }

    const passwordMatch = await this.userRepository.comparePassword(
      password,
      user.password
    );

    if (!user) {
      throw new Error('Email or password incorrect');
    }
  }
  const token = sign({}, '1234567890', {
    subject: user.id,
    expiresIn: '1d',
  });

  return { user, token }
}

export { AuthenticateUseCase };
