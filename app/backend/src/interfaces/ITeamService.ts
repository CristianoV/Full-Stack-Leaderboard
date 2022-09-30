import Teams from '../database/models/teams';

interface ITeamService {
  // create(obj: UserDTO): Promise<User>,
  allTeams(): any,
  findById(id: string): Promise<Teams>,
}

export default ITeamService;
