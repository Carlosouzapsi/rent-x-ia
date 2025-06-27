import 'reflect-metadata';
import express, { NextFunction } from 'express';
import swaggerUi from 'swagger-ui-express';
import { AppError } from './errors/AppError';
import 'express-async-errors';
import { router } from './routes';
import swaggerFile from './swagger.json';
import { AppDataSource } from './database';
import './shared/container';

AppDataSource.initialize()
  .then(() => {
    console.log('Data Source has been initialized!');
  })
  .catch(err => {
    console.error('Error during Data Source initialization', err);
  });

const app = express();

app.use(express.json());
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerFile));
app.use(router);

app.use(
  (err: Error, request: Request, response: Response, next: NextFunction) => {
    if (err instanceof AppError) {
      return response.status(err.statusCode).json({
        message: err.message,
      });
    }
    return response.status(500).json({
      status: 'error',
      message: `Internal server error - ${err.message}`,
    });
  }
);

app.listen(3333, () => {
  console.log('Server is running on port 3333');
});
