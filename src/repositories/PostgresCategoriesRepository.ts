import { Category } from '../model/Category';
import { ICategoriesRepository } from './ICategoriesRepository';

class PostgresCategoriesRepository implements ICategoriesRepository {
  create({ name, description }): void {
    console.log(name, description);
    return null;
  }
  list(): Category[] {
    return null;
  }
  findByName(name: string): Category {
    console.log(name);
    return null;
  }
}

export { PostgresCategoriesRepository };
