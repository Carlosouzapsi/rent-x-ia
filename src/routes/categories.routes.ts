import { Router } from 'express';
import multer from 'multer';
import { createCategoryController } from '../modules/useCases/createCategory';
import { listCategoryController } from '../modules/useCases/listCategories';
import { importCategoryController } from '../modules/useCases/uploadCategory';

const categoriesRoutes = Router();

const upload = multer({
  dest: './tmp',
});

categoriesRoutes.post('/', (request, response): any => {
  return createCategoryController.handle(request, response);
});

categoriesRoutes.get('/', (request, response): any => {
  return listCategoryController.handle(request, response);
});

categoriesRoutes.post(
  '/import',
  upload.single('file'),
  (request, response): any => {
    return importCategoryController.handle(request, response);
  }
);

export { categoriesRoutes };
