import { Request, Response } from 'express';
import UserService from '../services/user.service';

export default class UserController {
  constructor(private userService: UserService) {}

  async login(req: Request, res: Response) {
    const { email, password } = req.body;
    const user = await this.userService.login(email, password);
    if (user instanceof Error) {
      return res.status(user.statusCode).json({ message: user.message });
    }
    return res.status(200).json(user);
  }

  static async validade(req: Request, res: Response) {
    const { authorization } = req.headers;

    const valid = UserService.validateLogin(authorization as string);
    return res.status(200).json(valid);
  }
}
