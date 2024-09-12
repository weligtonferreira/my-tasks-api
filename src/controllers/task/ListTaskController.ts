import { Request, Response } from 'express';

import ListTaskService from '../../services/task/ListTaskService';

class ListTaskController {
  async handle(req: Request, res: Response) {
    const { id } = req.params;

    const task = await ListTaskService.execute(id);

    return res.status(200).json(task);
  }
}

export default new ListTaskController();
