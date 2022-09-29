import { Request, Response } from 'express';
import UserService from '../../services/users';

export default class UserController {
  constructor(private userService: UserService) {}

  async create(req: Request, res: Response) {
    const user = await this.userService.create(req.body);
    res.status(201).json(user);
  }

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

    const valid = UserService.validateLogin(authorization);
    return res.status(200).json(valid);
  }
}
