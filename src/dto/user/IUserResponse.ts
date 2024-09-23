import { Task } from '@prisma/client';

import { ITasksCount } from '../task/ITaskCount';

export interface IUserResponse {
  id: string;
  name: string;
  email: string;
  _count: ITasksCount;
  tasks: Task[];
  createdAt: Date;
  updatedAt: Date;
}
