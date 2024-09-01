import { User } from '@prisma/client';

import UserRepository from '../../repositories/UserRepository';
import { ICreateUserRequest } from '../../dto/user/ICreateUserRequest';
import { ApplicationErrors } from '../../errors/ApplicationErrors';

class CreateUserService {
  async execute(createUserInputData: ICreateUserRequest): Promise<User | null> {
    const userAlreadyExists = await UserRepository.findByEmail(
      createUserInputData.email
    );

    if (userAlreadyExists)
      throw new ApplicationErrors('User already exists', 400);

    const user = await UserRepository.create(createUserInputData);

    if (!user)
      throw new ApplicationErrors('The user could not be created', 400);

    return user;
  }
}

export default new CreateUserService();
