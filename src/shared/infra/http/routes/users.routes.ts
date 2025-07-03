import { Router } from 'express';
import multer from 'multer';
import { CreateUserController } from '../../../../modules/accounts/useCases/createUser/CreateUserController';
import { AuthenticateUserController } from '../../../../modules/accounts/createSession/authenticateUser/AuthenticateUseController';
import { UpdateUserAvatarController } from '../../../../modules/accounts/useCases/updateUserAvatar/UpdateUserAvatarController';
import upload from '../../../../config/upload';
import { ensureAuthenticated } from '../middlewares/ensureAuthenticated';

const usersRoutes = Router();

const uploadAvatar = multer(upload.upload('./tmp/avatar'));

const createUserController = new CreateUserController();
const authenticateUserController = new AuthenticateUserController();
const updateUserAvatarController = new UpdateUserAvatarController();
// @ts-ignore
usersRoutes.post('/', createUserController.handle);

// @ts-ignore
usersRoutes.post('/sessions', authenticateUserController.handle);

usersRoutes.patch(
  '/avatar',
  ensureAuthenticated,
  uploadAvatar.single('avatar'),
  // @ts-ignore
  updateUserAvatarController.handle
);

export { usersRoutes };
