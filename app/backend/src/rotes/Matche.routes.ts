import { Router } from 'express';
import MatcheController from '../controllers/matche.controller';
import Matche from '../database/models/matches';
import MatcheService from '../services/matche.service';

const MatcheRoutes: Router = Router();
const matchService = new MatcheService(Matche);
const matchController = new MatcheController(matchService);

MatcheRoutes.get('/matches', (req, res) => matchController.findAllMatche(req, res));

export default MatcheRoutes;