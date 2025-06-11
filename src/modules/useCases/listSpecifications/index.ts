import { ListSpecificationsController } from './ListSpecificationController';
import { ListSpecificationUseCase } from './ListSpecificationUseCase';
import { SpecificationRepository } from '../../cars/repositories/implementations/SpecificationRepository';

const listSpecificationUseCase = new ListSpecificationUseCase(
  SpecificationRepository.getInstance()
);

const listSpecificationController = new ListSpecificationsController(
  listSpecificationUseCase
);

export { listSpecificationController, listSpecificationUseCase };
