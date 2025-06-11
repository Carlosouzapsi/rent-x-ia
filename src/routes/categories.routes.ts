import { Router } from 'express';
import { createCategoryController } from '../modules/useCases/createCategory';
import { listCategoryController } from '../modules/useCases/listCategories';

const categoriesRoutes = Router();

categoriesRoutes.post('/', (request, response): any => {
  return createCategoryController.handle(request, response);
});

categoriesRoutes.get('/', (request, response): any => {
  return listCategoryController.handle(request, response);
});

export { categoriesRoutes };
