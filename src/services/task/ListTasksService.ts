import { Task } from '@prisma/client';

import TaskRepository from '../../repositories/TaskRepository';

class ListTasksService {
  async execute(): Promise<Task[] | null> {
    const tasks = await TaskRepository.findAll();

    return tasks;
  }
}

export default new ListTasksService();
