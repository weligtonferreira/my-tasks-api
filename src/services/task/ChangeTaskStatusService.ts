import { ApplicationErrors } from '../../errors/ApplicationErrors';
import TaskRepository from '../../repositories/TaskRepository';

class ChangeTaskStatusService {
  async execute(id: string): Promise<void> {
    const task = await TaskRepository.findById(id);

    if (!task) throw new ApplicationErrors('Task not found', 404);

    await TaskRepository.changeTaskStatusById(task.id, !task.isCompleted);
  }
}

export default new ChangeTaskStatusService();
