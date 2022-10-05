import { Request, Response } from 'express';
import leaderboard from '../services/leaderboard';

export default class UserController {
  constructor(private userService: typeof leaderboard) {}

  static async getAllLeaderboard(req: Request, res: Response) {
    const board = await leaderboard.getAllLeaderboard();
    return res.status(200).json(board);
  }

  static async getAwayLeaderboard(req: Request, res: Response) {
    const board = await leaderboard.getAwayLeaderboard();
    return res.status(200).json(board);
  }

  static async getHomeLeaderboard(req: Request, res: Response) {
    const board = await leaderboard.getHomeLeaderboard();
    return res.status(200).json(board);
  }
}
