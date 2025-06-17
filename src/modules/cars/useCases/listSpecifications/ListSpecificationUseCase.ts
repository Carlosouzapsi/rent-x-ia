import { ISpecificationRepository } from '../../../cars/repositories/ISpecificationRepository';
import { Specification } from '../../../cars/entities/Specification';

class ListSpecificationUseCase {
  constructor(private specificationsRepository: ISpecificationRepository) {}

  execute(): Specification[] {
    return this.specificationsRepository.list();
  }
}

export { ListSpecificationUseCase };
