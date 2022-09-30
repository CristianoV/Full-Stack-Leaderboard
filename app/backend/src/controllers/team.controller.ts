import { Request, Response } from 'express';
import TeamService from '../services/team.service';

export default class UserController {
  constructor(private teamService: TeamService) {}

  async allTeams(req: Request, res: Response) {
    const teams = await this.teamService.allTeams();

    return res.status(200).json(teams);
  }
}
