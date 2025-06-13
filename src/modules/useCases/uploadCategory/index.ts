import { ImportCategoryController } from './ImportCategoryController';
import { ImportCategoryUseCase } from './ImportCategoryUseCase';
import { CategoriesRepository } from '../../cars/repositories/implementations/CategoriesRepository';

const importCategoryUseCase = new ImportCategoryUseCase(
  CategoriesRepository.getInstance()
);

const importCategoryController = new ImportCategoryController(
  importCategoryUseCase
);

export { importCategoryController, importCategoryUseCase };
