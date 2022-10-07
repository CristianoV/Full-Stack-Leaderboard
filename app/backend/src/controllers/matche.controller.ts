import { Request, Response } from 'express';
import MatcheService from '../services/matche.service';

export default class UserController {
  constructor(private teamService: MatcheService) {}

  async findAllMatche(req: Request, res: Response) {
    const { inProgress } = req.query;

    const teams = await this.teamService.findAllMatche(inProgress as string);

    return res.status(200).json(teams);
  }

  async createMatche(req: Request, res: Response) {
    const { body } = req;

    const matche = await this.teamService.createMatche(body);

    return res.status(201).json(matche);
  }

  async updateMatche(req: Request, res: Response) {
    const { id } = req.params;

    const matche = await this.teamService.updateMatche(Number(id));

    return res.status(200).json(matche);
  }

  async updateMatcheResult(req: Request, res: Response) {
    const { id } = req.params;
    const { homeTeamGoals, awayTeamGoals } = req.body;

    const matche = await this.teamService.updateMatcheResult(Number(id), {
      homeTeamGoals,
      awayTeamGoals,
    });

    return res.status(200).json(matche);
  }
}
