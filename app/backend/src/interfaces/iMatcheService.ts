import Matche from '../database/models/matches';

interface IMatcheService {
  findAllMatche(inProgress: string): Promise<Matche[]>,
}

export default IMatcheService;
