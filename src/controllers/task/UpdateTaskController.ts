import { Request, Response } from 'express';

import { IUpdateTaskRequest } from '../../dto/task/IUpdateTaskRequest';
import UpdateTaskService from '../../services/task/UpdateTaskService';

class UpdateTaskController {
  async handle(req: Request, res: Response) {
    const { id } = req.params;
    const updateTaskInputData: IUpdateTaskRequest = req.body;

    await UpdateTaskService.execute(id, updateTaskInputData);

    return res.status(200).json({ message: 'Task has been updated' });
  }
}

export default new UpdateTaskController();
