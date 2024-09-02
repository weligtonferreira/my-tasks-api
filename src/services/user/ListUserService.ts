import UserRepository from '../../repositories/UserRepository';
import { ApplicationErrors } from '../../errors/ApplicationErrors';
import { IUserResponse } from '../../dto/user/IUserResponse';

class ListUserService {
  async execute(id: string): Promise<IUserResponse | null> {
    const user = await UserRepository.findById(id);

    if (!user) throw new ApplicationErrors('User not found', 404);

    return user;
  }
}

export default new ListUserService();
