import { Request, Response } from 'express';

import UpdateUserService from '../../services/user/UpdateUserService';
import { IUpdateUserRequest } from '../../dto/user/IUpdateUserRequest';

class UpdateUserController {
  async handle(req: Request, res: Response) {
    const { id } = req.params;
    const updateUserInputData: IUpdateUserRequest = req.body;

    await UpdateUserService.execute(id, updateUserInputData);

    return res.status(200).json({ message: 'User has been updated' });
  }
}

export default new UpdateUserController();
