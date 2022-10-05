import Teams from '../database/models/teams';

interface ITeamService {
  allTeams(): any,
  findById(id: string): Promise<Teams>,
}

export default ITeamService;
