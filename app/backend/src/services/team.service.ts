import ITeamService from '../interfaces/ITeamService';

class TeamService implements ITeamService {
  constructor(private teamModel: any) { }

  public async allTeams() {
    const allTeams = await this.teamModel.findAll();

    return allTeams;
  }

  public async findById(id: string) {
    const team = await this.teamModel.findByPk(id);

    return team;
  }
}

export default TeamService;
