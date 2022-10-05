// import Matche from './matches';
// import Teams from './teams';
// import ILeaderboard from '../../interfaces/ILeaderboard';

// const somatorio1 = async () => {
//   const match = await Matche.findAll({ raw: true, include: [{ model: Teams, as: 'teamAway' }] });

//   const xablau = match.map((item: any) => {
//     const pontos = { vitorias: 0, empates: 0, derrotas: 0, pontos: 0 };

//     if (item.homeTeamGoals > item.awayTeamGoals) pontos.vitorias += 1;
//     if (item.homeTeamGoals < item.awayTeamGoals) pontos.derrotas += 1;
//     if (item.homeTeamGoals === item.awayTeamGoals) pontos.empates += 1;

//     return { name: item['teamAway.teamName'],
//       totalPoints: pontos.empates * 1 + pontos.vitorias * 3,
//       totalGames: 1,
//       totalVictories: pontos.vitorias,
//       totalDraws: pontos.empates,
//       totalLosses: pontos.derrotas,
//       goalsFavor: item.awayTeamGoals,
//       goalsOwn: item.homeTeamGoals,
//       goalsBalance: item.awayTeamGoals - item.homeTeamGoals,
//     };
//   });
//   return xablau;
// };

// const somatorio = async () => {
//   const match = await Matche.findAll({ raw: true, include: [{ model: Teams, as: 'teamHome' }] });

//   const xablau = match.map((item: any) => {
//     const pontos = { vitorias: 0, empates: 0, derrotas: 0, pontos: 0 };

//     if (item.homeTeamGoals < item.awayTeamGoals) pontos.vitorias += 1;
//     if (item.homeTeamGoals > item.awayTeamGoals) pontos.derrotas += 1;
//     if (item.homeTeamGoals === item.awayTeamGoals) pontos.empates += 1;

//     return { name: item['teamHome.teamName'],
//       totalPoints: pontos.empates * 1 + pontos.vitorias * 3,
//       totalGames: 1,
//       totalVictories: pontos.vitorias,
//       totalDraws: pontos.empates,
//       totalLosses: pontos.derrotas,
//       goalsFavor: item.awayTeamGoals,
//       goalsOwn: item.homeTeamGoals,
//       goalsBalance: item.awayTeamGoals - item.homeTeamGoals,
//     };
//   });
//   return xablau;
// };

// somatorio();

// const somatorio2 = async (all: ILeaderboard[]) => {
//   const novoLista = all.reduce((soma: ILeaderboard[], cur: ILeaderboard) => {
//     const { name } = cur;
//     const repetido = soma.find((elem) => elem.name === name);

//     if (repetido) {
//       repetido.totalPoints += cur.totalPoints;
//       repetido.totalGames += 1;
//       repetido.totalVictories += cur.totalVictories;
//       repetido.totalDraws += cur.totalDraws;
//       repetido.totalLosses += cur.totalLosses;
//       repetido.goalsFavor += cur.goalsFavor;
//       repetido.goalsOwn += cur.goalsOwn;
//       repetido.goalsBalance += cur.goalsBalance;
//     } else soma.push(cur);
//     return soma;
//   }, []);

//   return novoLista;
//   // console.log(novoLista.sort((a: { totalPoints: number; }, b: { totalPoints: number; }) => b.totalPoints - a.totalPoints));
// };

// const amendoim = async () => {
//   const games = await somatorio();
//   const games1 = await somatorio1();
//   const all = [...games, ...games1] as ILeaderboard[];

//   const ame = await somatorio2(all);

//   const amen = ame.map((game: ILeaderboard) => ({
//     ...game,
//     efficiency: ((game.totalPoints / (game.totalGames * 3)) * 100).toFixed(2),
//   }));

//   const teste = amen.sort((a: ILeaderboard, b: ILeaderboard) => (
//     b.totalPoints - a.totalPoints
//     || b.totalVictories - a.totalVictories
//     || b.goalsBalance - a.goalsBalance
//     || b.goalsFavor - a.goalsFavor
//     || a.goalsOwn - b.goalsOwn
//   ));
//   console.log(teste);
// };

// amendoim();
