import { Request, Response } from 'express';

import ListTasksService from '../../services/task/ListTasksService';

class ListTasksController {
  async handle(req: Request, res: Response) {
    const tasks = await ListTasksService.execute();

    return res.status(200).json(tasks);
  }
}

export default new ListTasksController();
