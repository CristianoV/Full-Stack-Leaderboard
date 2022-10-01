import { Request, Response } from 'express';
import MatcheService from '../services/matche.service';

export default class UserController {
  constructor(private teamService: MatcheService) {}

  async findAllMatche(req: Request, res: Response) {
    const { inProgress } = req.query;

    const teams = await this.teamService.findAllMatche(inProgress);

    return res.status(200).json(teams);
  }
}
