import { Task } from '@prisma/client';

import { ICreateTaskRequest } from './ICreateTaskRequest';
import { IUpdateTaskRequest } from './IUpdateTaskRequest';
import { ITaskResponse } from './ITaskResponse';

export interface ITaskRepository {
  create: (
    userId: string,
    createTaskInputData: ICreateTaskRequest
  ) => Promise<Task | null>;
  findById: (id: string) => Promise<ITaskResponse | null>;
  findAll: () => Promise<Task[] | null>;
  updateById: (
    id: string,
    updateTaskInputData: IUpdateTaskRequest
  ) => Promise<void>;
  deleteById: (id: string) => Promise<void>;
  changeTaskStatusById: (id: string, isCompleted: boolean) => Promise<void>;
}
