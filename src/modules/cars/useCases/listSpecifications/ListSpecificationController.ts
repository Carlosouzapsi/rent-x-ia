import { Request, Response } from 'express';
import { ListSpecificationUseCase } from '../listSpecifications/ListSpecificationUseCase';
import { container } from 'tsyringe';
class ListSpecificationsController {
  async handle(request: Request, response: Response): Promise<Response> {
    const listSpecificationUseCase = container.resolve(
      ListSpecificationUseCase
    );
    const specifications = await listSpecificationUseCase.execute();
    return response.json(specifications);
  }
}

export { ListSpecificationsController };
