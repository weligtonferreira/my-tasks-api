import { Request, Response } from 'express';

import ListUsersService from '../../services/user/ListUsersService';

class ListUsersController {
  async handle(req: Request, res: Response) {
    const users = await ListUsersService.execute();

    return res.status(200).json(users);
  }
}

export default new ListUsersController();
