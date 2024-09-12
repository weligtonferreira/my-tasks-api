import { IUpdateTaskRequest } from '../../dto/task/IUpdateTaskRequest';
import { ApplicationErrors } from '../../errors/ApplicationErrors';
import TaskRepository from '../../repositories/TaskRepository';

class UpdateTaskService {
  async execute(
    id: string,
    updateTaskInputData: IUpdateTaskRequest
  ): Promise<void> {
    const task = await TaskRepository.findById(id);

    if (!task) throw new ApplicationErrors('Task not found', 404);

    await TaskRepository.updateById(id, updateTaskInputData);
  }
}

export default new UpdateTaskService();
