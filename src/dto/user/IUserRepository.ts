import { User } from '@prisma/client';

import { ICreateUserRequest } from './ICreateUserRequest';
import { IUpdateUserRequest } from './IUpdateUserRequest';
import { IUserResponse } from './IUserResponse';

export interface IUserRepository {
  create: (createUserInputData: ICreateUserRequest) => Promise<User | null>;
  findById: (id: string) => Promise<IUserResponse | null>;
  findByEmail: (email: string) => Promise<User | null>;
  findAll: () => Promise<User[] | null>;
  updateById: (
    id: string,
    updateUserInputData: IUpdateUserRequest
  ) => Promise<void>;
  deleteById: (id: string) => Promise<void>;
}
