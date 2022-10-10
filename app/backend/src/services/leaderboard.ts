import ILeaderboard, { IBoard } from '../interfaces/ILeaderboard';
import Teams from '../database/models/teams';
import Matche from '../database/models/matches';

export default class Leaderboards {
  public static async getAllLeaderboard() {
    const matchTeamAway = await Matche.findAll({ raw: true,
      where: { inProgress: false },
      include: [{ model: Teams, as: 'teamAway' }] }) as unknown as IBoard[];
    const matchTeamHome = await Matche.findAll({ raw: true,
      where: {
        inProgress: false },
      include: [{ model: Teams, as: 'teamHome' }] }) as unknown as IBoard[];

    const home = await Leaderboards.getHome(matchTeamHome) as unknown as ILeaderboard[];
    const away = await Leaderboards.getAway(matchTeamAway) as unknown as ILeaderboard[];
    const all = [...home, ...away];
    const leaderboard = Leaderboards.getLeaderboard(all);

    return leaderboard;
  }

  public static async getHomeLeaderboard() {
    const matchTeamHome = await Matche.findAll({ raw: true,
      where: {
        inProgress: false },
      include: [{ model: Teams, as: 'teamHome' }] }) as unknown as IBoard[];
    const home = await Leaderboards.getHome(matchTeamHome) as unknown as ILeaderboard[];
    const leaderboard = Leaderboards.getLeaderboard(home);
    return leaderboard;
  }

  public static async getAwayLeaderboard() {
    const matchTeamAway = await Matche.findAll({ raw: true,
      where: { inProgress: false },
      include: [{ model: Teams, as: 'teamAway' }] }) as unknown as IBoard[];
    const away = await Leaderboards.getAway(matchTeamAway) as unknown as ILeaderboard[];
    const leaderboard = Leaderboards.getLeaderboard(away);

    return leaderboard;
  }

  private static async getAway(match: IBoard[]) {
    const board = match.map((item: IBoard) => {
      const pontos = { vitorias: 0, empates: 0, derrotas: 0, pontos: 0 };

      if (item.homeTeamGoals < item.awayTeamGoals) pontos.vitorias += 1;
      if (item.homeTeamGoals > item.awayTeamGoals) pontos.derrotas += 1;
      if (item.homeTeamGoals === item.awayTeamGoals) pontos.empates += 1;

      return { name: item['teamAway.teamName'],
        totalPoints: pontos.empates * 1 + pontos.vitorias * 3,
        totalGames: 1,
        totalVictories: pontos.vitorias,
        totalDraws: pontos.empates,
        totalLosses: pontos.derrotas,
        goalsFavor: item.awayTeamGoals,
        goalsOwn: item.homeTeamGoals,
        goalsBalance: item.awayTeamGoals - item.homeTeamGoals,
      };
    });
    return board;
  }

  private static async getHome(match: IBoard[]) {
    const board = match.map((item: IBoard) => {
      const pontos = { vitorias: 0, empates: 0, derrotas: 0, pontos: 0 };

      if (item.homeTeamGoals > item.awayTeamGoals) pontos.vitorias += 1;
      if (item.homeTeamGoals < item.awayTeamGoals) pontos.derrotas += 1;
      if (item.homeTeamGoals === item.awayTeamGoals) pontos.empates += 1;

      return { name: item['teamHome.teamName'],
        totalPoints: pontos.empates * 1 + pontos.vitorias * 3,
        totalGames: 1,
        totalVictories: pontos.vitorias,
        totalDraws: pontos.empates,
        totalLosses: pontos.derrotas,
        goalsFavor: item.homeTeamGoals,
        goalsOwn: item.awayTeamGoals,
        goalsBalance: item.homeTeamGoals - item.awayTeamGoals,
      };
    });
    return board;
  }

  private static async getLeaderboard(all: ILeaderboard[]) {
    const novoLista = all.reduce((soma: ILeaderboard[], cur: ILeaderboard) => {
      const { name } = cur;
      const repetido = soma.find((elem) => elem.name === name);

      if (repetido) {
        repetido.totalPoints += cur.totalPoints;
        repetido.totalGames += 1;
        repetido.totalVictories += cur.totalVictories;
        repetido.totalDraws += cur.totalDraws;
        repetido.totalLosses += cur.totalLosses;
        repetido.goalsFavor += cur.goalsFavor;
        repetido.goalsOwn += cur.goalsOwn;
        repetido.goalsBalance += cur.goalsBalance;
      } else soma.push(cur);
      return soma;
    }, []);

    return this.ordem(novoLista);
  }

  private static ordem(teste: ILeaderboard[]) {
    const amen = teste.map((game: ILeaderboard) => ({
      ...game,
      efficiency: ((game.totalPoints / (game.totalGames * 3)) * 100).toFixed(2),
    }));

    const queijo = amen.sort((a: ILeaderboard, b: ILeaderboard) => (
      b.totalPoints - a.totalPoints
      || b.totalVictories - a.totalVictories
      || b.goalsBalance - a.goalsBalance
      || b.goalsFavor - a.goalsFavor
      || a.goalsOwn - b.goalsOwn
    ));
    return queijo;
  }
}
