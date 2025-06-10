import { CreateCategoryService } from '../modules/cars/services/CreateCategoryService';
import { CategoriesRepository } from '../modules/cars/repositories/CategoriesRepository';
import { Router } from 'express';

const categoriesRoutes = Router();
const categoriesRepository = new CategoriesRepository();

categoriesRoutes.post('/', (request, response): any => {
  const { name, description } = request.body;

  const createCategoryService = new CreateCategoryService(categoriesRepository);

  createCategoryService.execute({ name, description });

  return response.status(201).send();
});

categoriesRoutes.get('/', (request, response): any => {
  const all = categoriesRepository.list();
  return response.json(all);
});

export { categoriesRoutes };
