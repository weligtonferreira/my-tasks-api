import express, { Express } from 'express';
import 'express-async-errors';
import * as dotenv from 'dotenv';
import cors from 'cors';
import path from 'path';

import { handleExceptions } from './middlewares/handleExceptions';

import userRoutes from './routes/user.routes';
import taskRoutes from './routes/task.routes';

dotenv.config({ path: path.resolve() + '/.env' });

class App {
  app: Express;

  constructor() {
    this.app = express();
    this.middlewares();
    this.routes();
    this.handlers();
  }

  middlewares() {
    this.app.use(cors());
    this.app.use(express.json());
    this.app.use(express.urlencoded({ extended: true }));
  }

  handlers() {
    this.app.use(handleExceptions);
  }

  routes() {
    this.app.use('/users', userRoutes);
    this.app.use('/tasks', taskRoutes);
  }
}

export default new App().app;
