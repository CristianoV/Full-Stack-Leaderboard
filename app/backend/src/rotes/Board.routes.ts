import { Router } from 'express';
import BoardController from '../controllers/board.controller';

const BoardRoutes: Router = Router();

BoardRoutes.get('/leaderboard/home', (req, res) => BoardController.getHomeLeaderboard(req, res));
BoardRoutes.get('/leaderboard/away', (req, res) => BoardController.getAwayLeaderboard(req, res));
BoardRoutes.get('/leaderboard', (req, res) => BoardController.getAllLeaderboard(req, res));
export default BoardRoutes;
