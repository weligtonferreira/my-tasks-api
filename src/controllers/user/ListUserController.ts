import { Request, Response } from 'express';

import ListUserService from '../../services/user/ListUserService';

class ListUserController {
  async handle(req: Request, res: Response) {
    const { id } = req.params;

    const user = await ListUserService.execute(id);

    return res.status(200).json(user);
  }
}

export default new ListUserController();
