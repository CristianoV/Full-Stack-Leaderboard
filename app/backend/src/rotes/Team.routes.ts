import { Router } from 'express';
import TeamController from '../controllers/team.controller';
import TeamModel from '../database/models/teams';
import TeamService from '../services/team.service';

const TeamRoutes: Router = Router();
const teamService = new TeamService(TeamModel);
const teamController = new TeamController(teamService);

TeamRoutes.get('/teams', (req, res) => teamController.allTeams(req, res));

export default TeamRoutes;
