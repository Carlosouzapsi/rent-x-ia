import { User } from '../entities/User';
import { ICreateUserDTO } from './implementations/dtos/ICreateUserDTO';

interface IUsersRepository {
  create({
    name,
    email,
    password,
    driver_license,
  }: ICreateUserDTO): Promise<void>;
  findByEmail(email: string): Promise<User>;
  findById(id: string): Promise<User>;
}

export { IUsersRepository, ICreateUserDTO };
