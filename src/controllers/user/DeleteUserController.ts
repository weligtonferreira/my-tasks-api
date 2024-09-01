import { Request, Response } from 'express';

import DeleteUserService from '../../services/user/DeleteUserService';

class DeleteUserController {
  async handle(req: Request, res: Response) {
    const { id } = req.params;

    await DeleteUserService.execute(id);

    return res.status(200).json({ message: 'User has been deleted' });
  }
}

export default new DeleteUserController();
