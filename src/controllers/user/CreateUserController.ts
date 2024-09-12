import { Request, Response } from 'express';

import { ICreateUserRequest } from '../../dto/user/ICreateUserRequest';
import CreateUserService from '../../services/user/CreateUserService';

class CreateUserController {
  async handle(req: Request, res: Response) {
    const createUserInputData: ICreateUserRequest = req.body;

    const user = await CreateUserService.execute(createUserInputData);

    return res.status(201).json(user);
  }
}

export default new CreateUserController();
