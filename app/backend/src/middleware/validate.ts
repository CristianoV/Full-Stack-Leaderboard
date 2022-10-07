import { Request, Response, NextFunction } from 'express';
import JwtSecret from '../utils/JwtService';
import Matche from '../database/models/teams';

export default class Validate {
  static differentTeams(req: Request, res: Response, next: NextFunction) {
    const { body } = req;
    if (body.homeTeam === body.awayTeam) {
      return res.status(401).json({
        message: 'It is not possible to create a match with two equal teams',
      });
    }
    next();
  }

  static async validateTeam(req: Request, res: Response, next: NextFunction) {
    const { homeTeam, awayTeam } = req.body;

    const team1 = await Matche.findByPk(homeTeam, { raw: true });
    const team2 = await Matche.findByPk(awayTeam, { raw: true });

    if (!team1 || !team2) {
      return res.status(404).json({
        message: 'There is no team with such id!',
      });
    }

    next();
  }

  static validateAuthorization(req: Request, res: Response, next: NextFunction) {
    const { authorization } = req.headers;

    if (!authorization) return res.status(401).json({ message: 'Token not found' });

    const validate = JwtSecret.decode(authorization as string);

    if (!validate) {
      return res.status(401).json({
        message: 'Token must be a valid token',
      });
    }
    next();
  }
}
