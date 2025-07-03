import { compare } from 'bcrypt';
import { inject, injectable } from 'tsyringe';
import { sign } from 'jsonwebtoken';
import { IUsersRepository } from '../../repositories/IUsersRepository';
import { AppError } from '../../../../errors/AppError';

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
  // @ts-ignore
  async execute({ email, password }: IRequest): Promise<IResponse> {
    const user = await this.userRepository.findByEmail(email);

    if (!user) {
      throw new AppError('Email or password incorrect');
    }

    const passwordMatch = await compare(password, user.password);

    if (!passwordMatch) {
      throw new AppError('Email or password incorrect');
    }
    // @ts-ignore
    const token = sign({}, '1234567890', {
      subject: user.id,
      expiresIn: '1d',
    });

    return { user, token };
  }
}

export { AuthenticateUseCase };
