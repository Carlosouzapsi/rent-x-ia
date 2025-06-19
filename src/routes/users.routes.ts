import { Router } from 'express';
import { CreateUserController } from '../modules/accounts/useCases/CreateUserController';

const usersRoutes = Router();

const createUserController = new CreateUserController();

// @ts-ignore
usersRoutes.post('/', createUserController.handle);

export { usersRoutes };
