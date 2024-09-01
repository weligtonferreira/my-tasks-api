import express, { Express } from 'express';
import 'express-async-errors';
import * as dotenv from 'dotenv';
import path from 'path';

dotenv.config({ path: path.resolve() + '/.env.local' });

class App {
  app: Express;

  constructor() {
    this.app = express();
    this.middlewares();
  }

  middlewares() {
    this.app.use(express.json());
    this.app.use(express.urlencoded({ extended: true }));
  }
}

export default new App().app;
