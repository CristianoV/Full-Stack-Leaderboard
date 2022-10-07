import Teams from '../database/models/teams';

interface ITeamService {
  allTeams(): Promise<Teams[]>,
  findById(id: string): Promise<Teams | Record<string, string>>,
}

export default ITeamService;
