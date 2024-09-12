import { Task } from '@prisma/client';

import { prismaClient } from '../../prisma/prismaClient';
import { ITaskRepository } from '../dto/task/ITaskRepository';
import { ICreateTaskRequest } from '../dto/task/ICreateTaskRequest';
import { IUpdateTaskRequest } from '../dto/task/IUpdateTaskRequest';
import { ITaskResponse } from '../dto/task/ITaskResponse';

class TaskRepository implements ITaskRepository {
  async create(
    userId: string,
    createTaskInputData: ICreateTaskRequest
  ): Promise<Task | null> {
    return await prismaClient.task.create({
      data: {
        userId,
        ...createTaskInputData,
      },
    });
  }

  async findById(id: string): Promise<ITaskResponse | null> {
    return await prismaClient.task.findUnique({ where: { id } });
  }

  async findAll(): Promise<Task[] | null> {
    return await prismaClient.task.findMany();
  }

  async updateById(
    id: string,
    updateTaskInputData: IUpdateTaskRequest
  ): Promise<void> {
    await prismaClient.task.update({
      where: { id },
      data: { ...updateTaskInputData },
    });
  }

  async deleteById(id: string): Promise<void> {
    await prismaClient.task.delete({ where: { id } });
  }
}

export default new TaskRepository();
