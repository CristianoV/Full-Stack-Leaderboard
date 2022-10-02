import { INTEGER, Model } from 'sequelize';
import Teams from './teams';
import db from '.';

class Matche extends Model {
  id: number;
  homeTeam!: string;
  homeTeamGoals!: string;
  awayTeam!: string;
  awayTeamGoals!: string;
  inProgress!: string;
}

Matche.init(
  {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: INTEGER,
    },
    homeTeam: {
      type: INTEGER,
      references: {
        model: 'teams',
        key: 'team_name',
      },
    },
    homeTeamGoals: INTEGER,
    awayTeam: {
      type: INTEGER,
      references: {
        model: 'teams',
        key: 'team_name',
      },
    },
    awayTeamGoals: INTEGER,
    inProgress: INTEGER,
  },
  {
    underscored: true,
    sequelize: db,
    modelName: 'matche',
    timestamps: false,
  },
);

// Teams.hasMany(Matche, { foreignKey: 'homeTeam', as: 'home_team' });
// Teams.hasMany(Matche, { foreignKey: 'awayTeam', as: 'away_team' });
// Matche.belongsTo(Teams, { foreignKey: 'homeTeam', as: 'home_team' });
// Matche.belongsTo(Teams, { foreignKey: 'awayTeam', as: 'away_team' });
Matche.belongsTo(Teams, { foreignKey: 'homeTeam', as: 'teamHome' });
Matche.belongsTo(Teams, { foreignKey: 'awayTeam', as: 'teamAway' });

export default Matche;
