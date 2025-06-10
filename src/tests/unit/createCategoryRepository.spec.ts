import { CategoriesRepository } from '../../repositories/CategoriesRepository';

describe('Create Category Repository', () => {
  it('should be able to create a new category', () => {
    const categoriesRepository = new CategoriesRepository();
    categoriesRepository.create({
      name: 'Category Test',
      description: 'Category Description',
    });

    const category = categoriesRepository.findByName('Category Test');

    expect(category).toBeTruthy();
  });

  // TODO

  it.skip('should not be able to create a new category with same name', () => {
    const categoriesRepository = new CategoriesRepository();
    categoriesRepository.create({
      name: 'Category Test',
      description: 'Category Description',
    });
  });
});
