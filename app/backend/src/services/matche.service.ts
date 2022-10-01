import Teams from '../database/models/teams';
import IMatcheService from '../interfaces/iMatcheService';

class MatcheService implements IMatcheService {
  constructor(private matcheModel: any) {}

  public async findAllMatche(inProgress: any) {
    console.log(inProgress);

    if (!inProgress) {
      return this.matcheModel.findAll({
        include: [{ model: Teams, as: 'teamHome' },
          { model: Teams, as: 'teamAway' },
        ] });
    }

    const teste = inProgress === 'true' ? 1 : 0;

    console.log(inProgress === 'true' ? 1 : 0, typeof inProgress);

    const matches = await this.matcheModel.findAll({
      where: { inProgress: teste },
      include: [{ model: Teams, as: 'teamHome' },
        { model: Teams, as: 'teamAway' },
      ] });
    return matches;
  }
}

export default MatcheService;
