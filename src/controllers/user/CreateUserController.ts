import { Request, Response } from 'express';

import { ICreateUserRequest } from '../../dto/user/ICreateUserRequest';
import CreateUserService from '../../services/user/CreateUserService';

class CreateUserController {
  async handle(req: Request, res: Response) {
    const { name, email, password }: ICreateUserRequest = req.body;

    const user = await CreateUserService.execute({ name, email, password });

    return res.status(201).json(user);
  }
}

export default new CreateUserController();
