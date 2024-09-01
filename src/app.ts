import express, { Express } from 'express';
import 'express-async-errors';
import * as dotenv from 'dotenv';
import path from 'path';

import { handleExceptions } from './middlewares/handleExceptions';

dotenv.config({ path: path.resolve() + '/.env.local' });

class App {
  app: Express;

  constructor() {
    this.app = express();
    this.middlewares();
    this.handlers();
  }

  middlewares() {
    this.app.use(express.json());
    this.app.use(express.urlencoded({ extended: true }));
  }

  handlers() {
    this.app.use(handleExceptions);
  }
}

export default new App().app;
