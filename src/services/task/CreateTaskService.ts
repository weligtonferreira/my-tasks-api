import { Task } from '@prisma/client';

import TaskRepository from '../../repositories/TaskRepository';

import { ICreateTaskRequest } from '../../dto/task/ICreateTaskRequest';

class CreateTaskService {
  async handle(
    userId: string,
    createTaskInputData: ICreateTaskRequest
  ): Promise<Task | null> {
    const task = await TaskRepository.create(userId, createTaskInputData);

    return task;
  }
}

export default new CreateTaskService();
