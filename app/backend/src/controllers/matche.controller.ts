import { Request, Response } from 'express';
import MatcheService from '../services/matche.service';

export default class UserController {
  constructor(private teamService: MatcheService) {}

  async findAllMatche(req: Request, res: Response) {
    const { inProgress } = req.query;

    const teams = await this.teamService.findAllMatche(inProgress);

    return res.status(200).json(teams);
  }

  async createMatche(req: Request, res: Response) {
    const { body } = req;

    // console.log(req.headers.authorization);

    const matche = await this.teamService.createMatche(body);

    return res.status(201).json(matche);
  }
}
