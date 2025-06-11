import { Router } from 'express';
import { specificationRoutes } from './specification.routes';
import { categoriesRoutes } from './categories.routes';

const router = Router();

router.use('/categories', categoriesRoutes);
router.use('/specifications', specificationRoutes);

export { router };
