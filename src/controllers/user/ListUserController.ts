import { Request, Response } from 'express';

import ListUserService from '../../services/user/ListUserService';

class ListUserController {
  async handle(req: Request, res: Response) {
    const { id } = req.params;

    const user = await ListUserService.execute(id);

    return res.status(200).json({
      id: user?.id,
      name: user?.name,
      email: user?.email,
      tasksCount: user?._count.tasks,
      tasks: user?.tasks,
      createdAt: user?.createdAt,
      updatedAt: user?.updatedAt,
    });
  }
}

export default new ListUserController();
