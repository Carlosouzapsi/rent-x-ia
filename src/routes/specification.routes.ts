import { Router } from 'express';
import { CreateSpecificationController } from '../modules/cars/useCases/createSpecification/CreateSpecificationController';
import { ListSpecificationsController } from '../modules/cars/useCases/listSpecifications/ListSpecificationController';

const specificationRoutes = Router();

const createSpecificationController = new CreateSpecificationController();
const listSpecificationController = new ListSpecificationsController();

// @ts-ignore
specificationRoutes.post('/', createSpecificationController.handle);

// @ts-ignore
specificationRoutes.get('/', listSpecificationController.handle);

export { specificationRoutes };
