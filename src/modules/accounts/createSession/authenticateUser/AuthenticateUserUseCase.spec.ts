import { AppError } from '../../../../errors/AppError';
import { ICreateUserDTO } from '../../dtos/ICreateUserDTO';
import { UsersRepositoryInMemory } from '../../repositories/in-memory/UsersRepositoryInMemory';
import { AuthenticateUserUseCase } from '../../useCases/authenticateUser/AuthenticateUserUseCase';
import { CreateUserUseCase } from '../../useCases/createUser/CreateUserUseCase';

let usersRepositoryInMemory: UsersRepositoryInMemory;
let authenticateUserUseCase: AuthenticateUserUseCase;
let createUserUseCase: CreateUserUseCase;

describe('Authenticate User', () => {
  beforeEach(() => {
    usersRepositoryInMemory = new UsersRepositoryInMemory();
    authenticateUserUseCase = new AuthenticateUserUseCase(
      usersRepositoryInMemory
    );
    createUserUseCase = new CreateUserUseCase(usersRepositoryInMemory);
  });

  it('should be able to authenticate an user', async () => {
    const user: ICreateUserDTO = {
      name: 'User Test',
      driver_license: '000123',
      email: 'user@test.com',
      password: '1234',
    };

    await createUserUseCase.execute(user);

    const result = await authenticateUserUseCase.execute({
      email: user.email,
      password: user.password,
    });

    expect(result).toHaveProperty('token');
  });

  it('should not be able to authenticate an user with invalid email', async () => {
    await expect(
      authenticateUserUseCase.execute({
        email: 'invalid@test.com',
        password: 'false1234',
      })
    ).rejects.toBeInstanceOf(AppError);
  });

  it('should not be able to authenticate an user with invalid password', async () => {
    const user: ICreateUserDTO = {
      name: 'User Test',
      driver_license: '000123',
      email: 'user@test.com',
      password: '1234',
    };

    await createUserUseCase.execute(user);

    await expect(
      authenticateUserUseCase.execute({
        email: user.email,
        password: 'incorrectPassword1234',
      })
    ).rejects.toBeInstanceOf(AppError);
  });
});
