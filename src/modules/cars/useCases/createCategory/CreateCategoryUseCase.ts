import { AppError } from '../../../../errors/AppError';
import { ICategoriesRepository } from '../../../cars/repositories/ICategoriesRepository';
import { inject, injectable } from 'tsyringe';
interface IRequest {
  name: string;
  description: string;
}

@injectable()
class CreateCategoryUseCase {
  // construtor pode ser dessa forma com o private

  constructor(
    @inject('CategoriesRepository')
    private categoriesRepository: ICategoriesRepository
  ) {}
  async execute({ name, description }: IRequest): Promise<void> {
    const categoryAlreadyExists =
      await this.categoriesRepository.findByName(name);
    if (categoryAlreadyExists) {
      throw new AppError('Category already exists!');
    }

    await this.categoriesRepository.create({ name, description });
  }
}

export { CreateCategoryUseCase };
