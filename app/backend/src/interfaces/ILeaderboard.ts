interface ILeaderboard {
  totalGames: number, goalsOwn: number, goalsFavor: number,
  totalLosses: number, totalDraws: number, totalVictories: number, totalPoints: number,
  goalsBalance: number, name: string
}

export interface IBoard {
  name: string, totalPoints: number, totalGames: number, totalVictories: number,
  homeTeamGoals: number,
  awayTeamGoals: number,
  'teamAway.teamName': string,
}

export default ILeaderboard;
