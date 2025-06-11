import { CreateSpecificationController } from './CreateSpecificationController';
import { CreateSpecificationUseCase } from './CreateSpecificationUseCase';
import { SpecificationRepository } from '../../cars/repositories/implementations/SpecificationRepository';

const createSpecificationUseCase = new CreateSpecificationUseCase(
  SpecificationRepository.getInstance()
);

const createSpecificationController = new CreateSpecificationController(
  createSpecificationUseCase
);

export { createSpecificationController, createSpecificationUseCase };
