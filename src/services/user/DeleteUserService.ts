import UserRepository from '../../repositories/UserRepository';
import { ApplicationErrors } from '../../errors/ApplicationErrors';

class DeleteUserService {
  async execute(id: string): Promise<void> {
    const user = UserRepository.findById(id);

    if (!user) throw new ApplicationErrors('User not found', 404);

    await UserRepository.deleteById(id);
  }
}

export default new DeleteUserService();
