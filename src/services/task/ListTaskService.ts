import { Task } from '@prisma/client';

import TaskRepository from '../../repositories/TaskRepository';
import { ApplicationErrors } from '../../errors/ApplicationErrors';

class ListTaskService {
  async execute(id: string): Promise<Task | null> {
    const task = await TaskRepository.findById(id);

    if (!task) throw new ApplicationErrors('Task not found', 404);

    return task;
  }
}

export default new ListTaskService();
