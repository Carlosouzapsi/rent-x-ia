import { Router } from 'express';
import { CreateUserController } from '../modules/accounts/useCases/CreateUserController';
import { AuthenticateUserController } from '../modules/accounts/authenticateUser/authenticateUserController';

const usersRoutes = Router();

const createUserController = new CreateUserController();
const authenticateUserController = new AuthenticateUserController();

// @ts-ignore
usersRoutes.post('/', createUserController.handle);

// @ts-ignore
usersRoutes.post('/sessions', authenticateUserController.handle);

export { usersRoutes };
