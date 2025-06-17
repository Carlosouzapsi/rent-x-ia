import { Request, Response } from 'express';
import { ListSpecificationUseCase } from './ListSpecificationUseCase';

class ListSpecificationsController {
  constructor() {}

  async handle(request: Request, response: Response): Promise<Response> {
    const listSpecificationUseCase = container.resolve(ListSpecificationUseCase);
    const all = await listSpecificationUseCase.execute();
    return response.json(all);
  }
}

export { ListSpecificationsController };
