import TaskRepository from '../../repositories/TaskRepository';
import { ApplicationErrors } from '../../errors/ApplicationErrors';

class DeleteTaskService {
  async execute(id: string): Promise<void> {
    const task = await TaskRepository.findById(id);

    if (!task) throw new ApplicationErrors('Task not found', 404);

    await TaskRepository.deleteById(id);
  }
}

export default new DeleteTaskService();
