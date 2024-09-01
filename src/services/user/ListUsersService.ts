import { User } from '@prisma/client';

import UserRepository from '../../repositories/UserRepository';

class ListUsersService {
  async execute(): Promise<User[] | null> {
    return await UserRepository.findAll();
  }
}

export default new ListUsersService();
