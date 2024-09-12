import { Request, Response } from 'express';

import { ICreateTaskRequest } from './../../dto/task/ICreateTaskRequest';
import CreateTaskService from '../../services/task/CreateTaskService';

class CreateTaskController {
  async handle(req: Request, res: Response) {
    const { userId } = req.params;
    const createTaskInputData: ICreateTaskRequest = req.body;

    const task = await CreateTaskService.handle(userId, createTaskInputData);

    return res.status(201).json(task);
  }
}

export default new CreateTaskController();
