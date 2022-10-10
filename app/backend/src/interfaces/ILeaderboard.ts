interface ILeaderboard {
  name: string;
  totalGames: number;
  goalsOwn: number;
  goalsFavor: number;
  totalLosses: number;
  totalDraws: number;
  totalVictories: number;
  totalPoints: number;
  goalsBalance: number;
}

export interface IBoard {
  id: number;
  homeTeam: number;
  homeTeamGoals: number;
  awayTeam: number;
  awayTeamGoals: number;
  inProgress: number;
  'teamAway.teamName'?: string;
  'teamHome.teamName'?: string;
}

export default ILeaderboard;
