import { Request, Response, NextFunction } from 'express';

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
}
