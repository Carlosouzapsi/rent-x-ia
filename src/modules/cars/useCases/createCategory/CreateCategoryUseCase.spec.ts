import { AppError } from '../../../../errors/AppError';
import { CategoriesRepositoryInMemory } from '../../repositories/in-memory/CategoriesRepositoryInMemory';
import { CreateCategoryUseCase } from './CreateCategoryUseCase';

let createCategoryUseCase: CreateCategoryUseCase;
let categoriesRepositoryInMemory: CategoriesRepositoryInMemory;

describe('Create Category', () => {
  beforeEach(() => {
    categoriesRepositoryInMemory = new CategoriesRepositoryInMemory();
    createCategoryUseCase = new CreateCategoryUseCase(
      categoriesRepositoryInMemory
    );
  });

  it('should be able to create a new category', async () => {
    const category = {
      name: 'Category Test',
      description: 'Category Description Test',
    };
    // Cria uma categoria
    await createCategoryUseCase.execute(category);
    // Busca a categoria criada
    const categoryCreated = await categoriesRepositoryInMemory.findByName(
      category.name
    );
    // Verifica se a categoria foi criada com sucesso
    expect(categoryCreated).toHaveProperty('id');
  });

  it('should not be able to create a new category with same name', async () => {
    expect(async () => {
      const category = {
        name: 'Category Test',
        description: 'Category Description Test',
      };

      // cria com sucesso a primeira categoria
      await createCategoryUseCase.execute(category);

      // tenta criar uma segunda categoria com o mesmo nome
      await createCategoryUseCase.execute(category);
    }).rejects.toBeInstanceOf(AppError); // Verifica se o erro é uma instância de AppError
  });
});
