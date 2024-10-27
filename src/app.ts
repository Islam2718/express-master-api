import 'reflect-metadata';
import express from 'express';
import { AppDataSource } from './config/database';
import userRoutes from './controllers/users/user.routes';

const app = express();
app.use(express.json());

AppDataSource.initialize()
  .then(() => console.log("Database connected successfully"))
  .catch((error) => console.log(error));

app.use('/api/users', userRoutes);
// Register other routes here

export default app;
