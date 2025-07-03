import { Router } from 'express';
import { CreateSpecificationController } from '../../../../modules/cars/useCases/createSpecification/CreateSpecificationController';
import { ListSpecificationsController } from '../../../../modules/cars/useCases/listSpecifications/ListSpecificationController';
import { ensureAuthenticated } from '../middlewares/ensureAuthenticated';

const specificationRoutes = Router();

const createSpecificationController = new CreateSpecificationController();
const listSpecificationController = new ListSpecificationsController();

specificationRoutes.use(ensureAuthenticated);
// @ts-ignore
specificationRoutes.post('/', createSpecificationController.handle);

// @ts-ignore
specificationRoutes.get('/', listSpecificationController.handle);

export { specificationRoutes };
