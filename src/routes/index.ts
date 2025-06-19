import { Router } from 'express';
import { specificationRoutes } from './specification.routes';
import { categoriesRoutes } from './categories.routes';
import { usersRoutes } from './users.routes';

const router = Router();

router.use('/categories', categoriesRoutes);
router.use('/specifications', specificationRoutes);
router.use('/users', usersRoutes);

export { router };
