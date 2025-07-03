import { Category } from '@modules/cars/entities/Category';

interface ICreateCategoryDTO {
  name: string;
  description: string;
}

// Essa interface é um contrato que define os métodos que devem ser implementados pelo repositório de categorias
interface ICategoriesRepository {
  findByName(name: string): Promise<Category>;
  create({ name, description }: ICreateCategoryDTO): Promise<void>;
  list(): Promise<Category[]>;
}

export { ICategoriesRepository, ICreateCategoryDTO };
