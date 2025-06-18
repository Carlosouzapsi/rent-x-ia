import { ISpecificationRepository } from '../../../cars/repositories/ISpecificationRepository';
import { Specification } from '../../../cars/entities/Specification';
import { inject, injectable } from 'tsyringe';

@injectable()
class ListSpecificationUseCase {
  constructor(
    @inject('SpecificationRepository')
    private specificationsRepository: ISpecificationRepository
  ) {}

  async execute(): Promise<Specification[]> {
    const specifications = await this.specificationsRepository.list();
    return specifications;
  }
}

export { ListSpecificationUseCase };
