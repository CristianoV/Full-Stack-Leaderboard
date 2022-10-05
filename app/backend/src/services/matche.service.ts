import Matche from '../database/models/matches';
import Teams from '../database/models/teams';
import IMatcheService from '../interfaces/iMatcheService';

export default class MatcheService implements IMatcheService {
  constructor(private matcheModel: typeof Matche) {}

  public async findAllMatche(inProgress: any) {
    if (!inProgress) {
      return this.matcheModel.findAll({
        include: [
          { model: Teams, as: 'teamHome' },
          { model: Teams, as: 'teamAway' },
        ],
      });
    }

    return this.matcheModel.findAll({
      where: { inProgress: inProgress === 'true' ? 1 : 0 },
      include: [
        { model: Teams, as: 'teamHome' },
        { model: Teams, as: 'teamAway' },
      ],
    });
  }

  public async createMatche(matche: Record<string, string | number | boolean>) {
    const obj = { ...matche };
    obj.inProgress = matche.inProgress === true ? 1 : 0;

    const { id } = await this.matcheModel.create(obj);

    const find = await this.matcheModel.findOne({ where: { id } });

    return find;
  }

  public async updateMatche(id: number) {
    const find = await this.matcheModel.update({ inProgress: 0 }, { where: { id } });

    if (find) {
      return { message: 'Finished' };
    }
  }

  public async updateMatcheResult(id: number, result: Record<string, string | number>) {
    console.log(result, id);

    const { homeTeamGoals, awayTeamGoals } = result;

    const find = await this.matcheModel.update({ homeTeamGoals, awayTeamGoals }, { where: { id } });

    console.log(find);

    if (find) {
      return { message: 'Updated!' };
    }
  }
}
