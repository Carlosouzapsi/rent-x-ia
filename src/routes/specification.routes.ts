import { Router } from 'express';
import { createSpecificationController } from '../modules/useCases/createSpecification';
import { listSpecificationController } from '../modules/useCases/listSpecifications';

const specificationRoutes = Router();

specificationRoutes.post('/', (request, response): any => {
  return createSpecificationController.handle(request, response);
});

specificationRoutes.get('/', (request, response): any => {
  return listSpecificationController.handle(request, response);
});

export { specificationRoutes };
