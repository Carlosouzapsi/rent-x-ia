import supertest from 'supertest';
import express from 'express';
import { categoriesRoutes } from '../../routes/categories.routes';

const app = express();
app.use(express.json());
app.use('/categories', categoriesRoutes);

describe('Create Category', () => {
  it('should be able to create a new category', async () => {
    const response = await supertest(app).post('/categories').send({
      name: 'Category Test',
      description: 'Category Description',
    });

    expect(response.status).toBe(201);
  });
});
