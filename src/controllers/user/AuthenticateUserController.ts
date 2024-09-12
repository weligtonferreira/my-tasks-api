import { Request, Response } from 'express';

import { ILoginCredentialsRequest } from '../../dto/user/ILoginCredentialsRequest';
import AuthenticateUserService from '../../services/user/AuthenticateUserService';

class AuthenticateUserController {
  async handle(req: Request, res: Response) {
    const { email, password } = req.body as ILoginCredentialsRequest;

    const token = await AuthenticateUserService.execute({ email, password });

    return res.status(201).json(token);
  }
}

export default new AuthenticateUserController();
