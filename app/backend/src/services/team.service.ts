import Teams from '../database/models/teams';
import ITeamService from '../interfaces/ITeamService';

class TeamService implements ITeamService {
  constructor(private teamModel: typeof Teams) { }

  public async allTeams() {
    const allTeams = await this.teamModel.findAll();

    return allTeams;
  }

  public async findById(id: string) {
    const team = await this.teamModel.findByPk(id);

    if (!team) return { message: 'Team not found' };

    return team;
  }
}

export default TeamService;
