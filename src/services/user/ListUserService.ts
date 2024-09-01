import { User } from '@prisma/client';

import UserRepository from '../../repositories/UserRepository';
import { ApplicationErrors } from '../../errors/ApplicationErrors';

class ListUserService {
  async execute(id: string): Promise<User | null> {
    const user = await UserRepository.findById(id);

    if (!user) throw new ApplicationErrors('User not found', 404);

    return user;
  }
}

export default new ListUserService();
