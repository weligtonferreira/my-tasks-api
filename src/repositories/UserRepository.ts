import { User } from '@prisma/client';
import { prismaClient } from '../../prisma/prismaClient';
import * as bcrypt from 'bcrypt';

import { ICreateUserRequest } from '../dto/user/ICreateUserRequest';
import { IUpdateUserRequest } from '../dto/user/IUpdateUserRequest';
import { IUserRepository } from '../dto/user/IUserRepository';

class UserRepository implements IUserRepository {
  async create(createUserInputData: ICreateUserRequest): Promise<User | null> {
    const { password, ...rest } = createUserInputData;

    return await prismaClient.user.create({
      data: {
        password: await bcrypt.hash(password, 8),
        ...rest,
      },
    });
  }

  async findById(id: string): Promise<User | null> {
    return await prismaClient.user.findUnique({
      where: { id },
    });
  }

  async findByEmail(email: string): Promise<User | null> {
    return await prismaClient.user.findUnique({
      where: { email },
    });
  }

  async findAll(): Promise<User[] | null> {
    return await prismaClient.user.findMany();
  }

  async updateById(
    id: string,
    updateUserInputData: IUpdateUserRequest
  ): Promise<void> {
    await prismaClient.user.update({
      where: { id },
      data: updateUserInputData,
    });
  }

  async deleteById(id: string): Promise<void> {
    await prismaClient.user.delete({
      where: { id },
    });
  }
}

export default new UserRepository();
