import { DataSource } from 'typeorm';
import { User } from '../entities/User';
// import { Setting } from '../entities/Setting';

export const AppDataSource = new DataSource({
  type: 'mysql',
  host: process.env.DB_HOST,
  port: parseInt(process.env.DB_PORT || '3306'),
  username: "root",
  password: "",
  database: "master_api_db",
  entities: [User], // add all entities here
//   username: process.env.DB_USER,
//   password: process.env.DB_PASS,
//   database: process.env.DB_NAME,
//   entities: [User], // add all entities here
  synchronize: true,
});
