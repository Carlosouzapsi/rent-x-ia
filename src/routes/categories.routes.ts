import { Router } from 'express';
import multer from 'multer';
import { ListCategoryController } from '../modules/cars/useCases/listCategories/ListCategoryController';
import { ImportCategoryController } from '../modules/cars/useCases/uploadCategory/ImportCategoryController';
import { CreateCategoryController } from '../modules/cars/useCases/createCategory/CreateCategoryController';
const categoriesRoutes = Router();

const upload = multer({
  dest: './tmp',
});

const createCategoryController = new CreateCategoryController();
const listCategoryController = new ListCategoryController();
const importCategoryController = new ImportCategoryController();

// @ts-ignore
categoriesRoutes.post('/', createCategoryController.handle);

// @ts-ignore
categoriesRoutes.get('/', listCategoryController.handle);

// @ts-ignore
categoriesRoutes.post(
  '/import',
  upload.single('file'),
  // @ts-ignore
  importCategoryController.handle
);

export { categoriesRoutes };
