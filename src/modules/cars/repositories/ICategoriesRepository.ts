import { Category } from '../model/Category';

interface ICreateCategoryDTO {
  name: string;
  description: string;
}

// Essa interface é um contrato que define os métodos que devem ser implementados pelo repositório de categorias
interface ICategoriesRepository {
  findByName(name: string): Category;
  create({ name, description }: ICreateCategoryDTO): void;
  list(): Category[];
}

export { ICategoriesRepository, ICreateCategoryDTO };
