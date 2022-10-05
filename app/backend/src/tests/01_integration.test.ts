import * as chai from 'chai';
// @ts-ignore
import chaiHttp = require('chai-http');
import * as Sinon from 'sinon';
import { app } from '../app';
import User from '../database/models/users';
import Teams from '../database/models/teams';
import UserService from '../services/user.service';
import {
  Login,
  userMock,
  userMockTeams,
  token,
  validate,
  matcheMock,
  matcheNotInProgressMock,
  newMatcheMock,
  BoardMock,
  newMatcheCreatedMock,
} from './utils/mocks';
import Matche from '../database/models/matches';

const teste = {
  dataValues: {
    id: 2,
    homeTeam: 9,
    homeTeamGoals: 1,
    awayTeam: 14,
    awayTeamGoals: 1,
    inProgress: 0,
  },
};

chai.use(chaiHttp);

describe('Testando rotas', () => {
  describe('Users', () => {
    before(() => {
      Sinon.stub(User, 'findOne').resolves(userMock as User);
    });

    after(() => {
      Sinon.restore();
    });
    it('Testando rota de /login', async () => {
      const response = await chai.request(app).post('/login').send(Login);

      chai.expect(response.status).to.equal(200);
      chai.expect(response.body).to.be.key('token');
    });

    it('Testando rota de /login/validate', async () => {
      const response = await chai
        .request(app)
        .get('/login/validate')
        .set({ authorization: token });

      chai.expect(response.status).to.equal(200);
      chai.expect(response.body).to.deep.equal(validate);
    });
  });

  describe('Teams', () => {
    before(() => {
      Sinon.stub(Teams, 'findAll').resolves(userMockTeams as any);
      Sinon.stub(Teams, 'findByPk').resolves(userMockTeams[0] as any);
    });

    after(() => {
      Sinon.restore();
    });
    it('Testando rota de /teams', async () => {
      const response = await chai.request(app).get('/teams').send();

      chai.expect(response.status).to.equal(200);
      chai.expect(response.body).to.deep.equal(userMockTeams);
    });
    it('Testando rota de /teams/:id', async () => {
      const response = await chai.request(app).get('/teams/1').send();

      chai.expect(response.status).to.equal(200);
      chai.expect(response.body).to.deep.equal(userMockTeams[0]);
    });
  });
  describe('Matches', () => {
    before(() => {
      Sinon.stub(Matche, 'findByPk').resolves(
        matcheNotInProgressMock[0] as any
      );
      Sinon.stub(Matche, 'findAll')
        .resolves(matcheMock as any)
        .onSecondCall()
        .resolves(matcheNotInProgressMock[0] as any);
      Sinon.stub(Matche, 'findOne').resolves(newMatcheCreatedMock as any);
      Sinon.stub(Matche, 'update').resolves(teste as any);
    });
    after(() => {
      Sinon.restore();
    });
    it('Testando rota de /matches', async () => {
      const response = await chai.request(app).get('/matches').send();

      chai.expect(response.status).to.equal(200);
      chai.expect(response.body).to.deep.equal(matcheMock);
    });
    it('Testando rota de /matches onde ela recebe um query "inProgress"=true', async () => {
      const response = await chai
        .request(app)
        .get('/matches?inProgress=true')
        .send();

      chai.expect(response.status).to.equal(200);
      chai
        .expect(response.body.inProgress)
        .to.deep.equal(matcheNotInProgressMock[0].inProgress);
    });
    it('Testando rota de /matches criando uma nova partida', async () => {
      const response = await chai
        .request(app)
        .post('/matches')
        .send(newMatcheMock)
        .set({ authorization: token });

      chai.expect(response.status).to.equal(201);
      chai.expect(response.body).to.deep.equal(newMatcheCreatedMock);
    });
    it('Testando o endpoint /matches/:id/finish de modo que seja possível alterar o status inProgress de uma partida para false no banco de dados', async () => {
      const response = await chai
        .request(app)
        .patch('/matches/2/finish')
        .send();

      chai.expect(response.status).to.equal(200);
      chai.expect(response.body).to.deep.equal({ message: 'Finished' });
    });
    it('Testando o endpoint /matches/:id de forma que seja possível atualizar partidas em andamento', async () => {
      const response = await chai.request(app).patch('/matches/1').send({
        homeTeamGoals: 3,
        awayTeamGoals: 1,
      });

      chai.expect(response.status).to.equal(200);
      chai.expect(response.body).to.deep.equal({ message: 'Updated!' });
    });
  });
  describe('Board', () => {
    before(() => {
      Sinon.stub(Matche, 'findAll').resolves(BoardMock as any);
    });

    after(() => {
      Sinon.restore();
    });
    it('Testando rota de /leaderboard/home', async () => {
      const response = await chai.request(app).get('/leaderboard/home').send();

      chai.expect(response.status).to.equal(200);
      response.body.forEach((element: any, index: number) => {
      chai.expect(response.body[index]).to.be.keys(
          'efficiency',
          'goalsBalance',
          'goalsFavor',
          'goalsOwn',
          'name',
          'totalDraws',
          'totalGames',
          'totalLosses',
          'totalPoints',
          'totalVictories'
        );
      });
    });
  });
});
