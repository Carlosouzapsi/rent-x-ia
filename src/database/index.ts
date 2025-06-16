import { DataSource } from 'typeorm';

export const AppDataSource = new DataSource({
  type: 'postgres',
  host: '127.0.0.1',
  port: 5435,
  username: 'docker',
  password: 'ignite',
  database: 'rentx',
  logging: true,
});
