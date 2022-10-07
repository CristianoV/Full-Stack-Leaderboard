import * as chai from 'chai';
// @ts-ignore
import Team from '../database/models/teams';
import TeamService from '../services/team.service';
import * as Sinon from 'sinon';

const { expect } = chai;

const userMock = [
    {
    "id": 1,
    "teamName": "Avaí/Kindermann"
    },
    {
    "id": 2,
    "teamName": "Bahia"
    },
    {
    "id": 3,
    "teamName": "Botafogo"
    },
    {
    "id": 4,
    "teamName": "Corinthians"
    },
];

const userMockId = [
    {
    "id": 1,
    "teamName": "Avaí/Kindermann"
    },
];

describe('Testando o Team.service', () => {
  const service = new TeamService(Team);

  describe('Testando o metodo allTeams', () => {
    before(async () => {
        Sinon.stub(Team, 'findAll').resolves(userMock as any);
      });

      after(() => {
        (Team.findAll as sinon.SinonStub).restore();
      });
    it('se ao chamar o metodo allTeams retorna um array com todos os times', async () => {
        const team = await service.allTeams();        
    
        expect(team).to.be.an('array');
        expect(team).to.be.lengthOf(4);
        expect(team[0]).to.be.keys('id', 'teamName');
        expect(team).to.be.deep.equal(userMock);
    });
  });

  describe('Testando o metodo findById', () => {
    before(async () => {
        Sinon.stub(Team, 'findByPk').resolves(userMockId as any);
      });

      after(() => {
        (Team.findByPk as sinon.SinonStub).restore();
      });
      it('se ao chamar o metodo findById retorna um array um times', async () => {
        const team = await service.findById('1');

        expect(team).to.be.an('array');
        expect(team).to.be.lengthOf(1);
        expect(team).to.be.deep.equal(userMockId);
    });
  });
});
