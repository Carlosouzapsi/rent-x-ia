import { CreateCategoryUseCase } from './CreateCategoryUseCase';
import { CategoriesRepository } from '../../cars/repositories/implementations/CategoriesRepository';
import { CreateCategoryController } from './CreateCategoryController';

const categoriesRepository = CategoriesRepository.getInstance();
const createCategoryUseCase = new CreateCategoryUseCase(categoriesRepository);

const createCategoryController = new CreateCategoryController(
  createCategoryUseCase
);

export { createCategoryController, createCategoryUseCase };
