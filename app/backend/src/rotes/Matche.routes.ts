import { Router } from 'express';
import MatcheController from '../controllers/matche.controller';
import Matche from '../database/models/matches';
import MatcheService from '../services/matche.service';
import Validate from '../middleware/validate';

const MatcheRoutes: Router = Router();
const matchService = new MatcheService(Matche);
const matchController = new MatcheController(matchService);

MatcheRoutes.get('/matches', (req, res) =>
  matchController.findAllMatche(req, res));

MatcheRoutes.post(
  '/matches',
  Validate.differentTeams,
  Validate.validateTeam,
  Validate.validateAuthorization,
  (req, res) => matchController.createMatche(req, res),
);

MatcheRoutes.patch('/matches/:id/finish', (req, res) =>
  matchController.updateMatche(req, res));

export default MatcheRoutes;
