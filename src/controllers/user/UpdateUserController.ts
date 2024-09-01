import { Request, Response } from 'express';

import UpdateUserService from '../../services/user/UpdateUserService';
import { IUpdateUserRequest } from '../../dto/user/IUpdateUserRequest';

class UpdateUserController {
  async handle(req: Request, res: Response) {
    const { id } = req.params;
    const { name, email, password }: IUpdateUserRequest = req.body;

    await UpdateUserService.execute(id, { name, email, password });

    return res.status(200).json({ message: 'User has been updated' });
  }
}

export default new UpdateUserController();
