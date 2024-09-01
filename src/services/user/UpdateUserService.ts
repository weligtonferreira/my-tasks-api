import { IUpdateUserRequest } from '../../dto/user/IUpdateUserRequest';
import { ApplicationErrors } from '../../errors/ApplicationErrors';
import UserRepository from '../../repositories/UserRepository';

class UpdateUserService {
  async execute(
    id: string,
    updateUserInputData: IUpdateUserRequest
  ): Promise<void> {
    const user = await UserRepository.findById(id);

    if (!user) throw new ApplicationErrors('User not found', 404);

    await UserRepository.updateById(id, updateUserInputData);
  }
}

export default new UpdateUserService();
