interface ILeaderboard {
  totalGames: number, goalsOwn: number, goalsFavor: number,
  totalLosses: number, totalDraws: number, totalVictories: number, totalPoints: number,
  goalsBalance: number, name: string
}

export interface IBoard {
  id: number;
  homeTeam: string;
  homeTeamGoals: string;
  awayTeam: string;
  awayTeamGoals: string;
  inProgress: string;
  'teamAway.teamName': string;
}

export default ILeaderboard;
