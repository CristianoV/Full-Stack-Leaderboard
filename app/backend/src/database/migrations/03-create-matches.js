module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable(
      "matches",
      {
        id: {
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
          type: Sequelize.INTEGER,
        },
        home_team: {
          type: Sequelize.INTEGER,
          references: {
            model: "teams",
            key: "id",
          },
        },
        home_team_goals: Sequelize.INTEGER,
        away_team: {
          type: Sequelize.INTEGER,
          references: {
            model: "teams",
            key: "id",
          },
        },
        away_team_goals: Sequelize.INTEGER,
        in_progress: Sequelize.INTEGER,
      },
      {
        timestamps: false,
      }
    );
  },
  down: async (queryInterface) => {
    await queryInterface.dropTable("matches");
  },
};
