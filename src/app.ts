import express, { Express } from 'express';
import 'express-async-errors';
import * as dotenv from 'dotenv';
import path from 'path';

dotenv.config({ path: path.resolve() + '/.env.local' });

class App {
  app: Express;

  constructor() {
    this.app = express();
  }
}

export default new App().app;
