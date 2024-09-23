import { Request, Response } from 'express';

import ChangeTaskStatusService from '../../services/task/ChangeTaskStatusService';

class ChangeTaskStatusController {
  async handle(req: Request, res: Response) {
    const { id } = req.params;

    await ChangeTaskStatusService.execute(id);

    return res.status(200).json({ message: 'Task status has been changed' });
  }
}

export default new ChangeTaskStatusController();
