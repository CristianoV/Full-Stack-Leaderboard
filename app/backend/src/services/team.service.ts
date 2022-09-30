import ITeamService from '../interfaces/ITeamService';

class TeamService implements ITeamService {
  constructor(private teamModel: any) { }

  public async allTeams() {
    const allTeams = await this.teamModel.findAll();

    return allTeams;
  }
}

export default TeamService;
