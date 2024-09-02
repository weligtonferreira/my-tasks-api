import { sign, SignOptions } from 'jsonwebtoken';
import * as bcrypt from 'bcrypt';

import UserRepository from '../../repositories/UserRepository';
import { ILoginCredentialsRequest } from '../../dto/user/ILoginCredentialsRequest';
import { ApplicationErrors } from '../../errors/ApplicationErrors';

class AuthenticateUserService {
  async execute({
    email,
    password,
  }: ILoginCredentialsRequest): Promise<string> {
    const userExists = await UserRepository.findByEmail(email);

    if (!userExists) {
      throw new ApplicationErrors('Email or password is invalid', 400);
    }

    const hashedPassword = userExists.password;

    const isPasswordCorrect = await bcrypt.compare(password, hashedPassword);

    if (!isPasswordCorrect) {
      throw new ApplicationErrors('Email or password is invalid', 400);
    }

    const payload = { userId: userExists.id };

    const jwtSecretKey = process.env.JWT_SECRET_KEY || '';

    const signOptions: SignOptions = {
      expiresIn: '4d',
      subject: payload.userId,
    };

    const jwtToken = sign(payload, jwtSecretKey, signOptions);

    return jwtToken;
  }
}

export default new AuthenticateUserService();
