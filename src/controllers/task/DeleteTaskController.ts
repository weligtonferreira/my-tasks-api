import { Request, Response } from 'express';

import DeleteTaskService from '../../services/task/DeleteTaskService';

class DeleteTaskController {
  async handle(req: Request, res: Response) {
    const { id } = req.params;

    await DeleteTaskService.execute(id);

    return res.status(200).json({ message: 'Task has been deleted' });
  }
}

export default new DeleteTaskController();
