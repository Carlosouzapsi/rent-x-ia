import { Category } from '../../../modules/cars/model/Category';
import { ICategoriesRepository } from '../../cars/repositories/ICategoriesRepository';

class ListCategoryUseCase {
  constructor(private categoriesRepository: ICategoriesRepository) {}

  execute(): Category[] {
    const categories = this.categoriesRepository.list();
    return categories;
  }
}

export { ListCategoryUseCase };
