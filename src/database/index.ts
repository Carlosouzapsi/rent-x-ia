import { DataSource } from 'typeorm';

export const AppDataSource = new DataSource({
  type: 'postgres',
  // host: '127.0.0.1',
  host: '0.0.0.0',
  port: 5433,
  username: 'docker',
  password: 'ignite',
  database: 'rentx',
  migrations: ['./src/database/migrations/*.ts'],
  entities: ['./src/modules/**/entities/*.ts'],

  logging: true,
});
