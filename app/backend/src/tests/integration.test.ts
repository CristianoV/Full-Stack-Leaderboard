import * as chai from 'chai';
// @ts-ignore
import chaiHttp = require('chai-http');
import * as Sinon from 'sinon';
import {app} from '../app';
import User from '../database/models/users';
import Teams from '../database/models/teams'
import UserService from '../services/user.service'

chai.use(chaiHttp);

const Login = {
    email: 'admin@admin.com',
    password: 'secret_admin'
}

const userMock = {
    id: 1,
    username: 'Admin',
    role: 'admin',
    email: 'admin@admin.com',
    password: '$2a$08$xi.Hxk1czAO0nZR..B393u10aED0RQ1N3PAEXQ7HxtLjKPEZBu.PW'
  };

  const userMockTeams = [
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

const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYWRtaW4iLCJpYXQiOjE2NjQ1NjY3MDd9.WVUGM9RepbqetXGY2Lj1Pw0M02Q9brws3uzbK3RMfaw';

const validate = { role: 'admin', iat: 1664566582 };

describe('Testando rotas', () => {
    describe('Users', () => {
        before(() => {
            Sinon.stub(User, 'findOne').resolves(userMock as User)
            // Sinon.stub(UserService, 'validateLogin').resolves(validate as any)
          });
      
          after(() => {
            Sinon.restore();
          });
        it('Testando rota de /login', async () => {
            const response = await chai.request(app).post('/login').send(Login);

            chai.expect(response.status).to.equal(200);
            chai.expect(response.body).to.be.key('token')
        });

        // it('Testando rota de /login/validate', async () => {
        //     const response = await (await chai.request(app).get('/login/validate').send()).header({'authorization': 'asdasd'})

        //     console.log(response.body);
            

        //     chai.expect(response.status).to.equal(200);
        //     chai.expect(response.body).to.deep.equal(validate)
        // });
    });

    describe('Teams', () => {
        before(() => {
            Sinon.stub(Teams, 'findAll').resolves(userMockTeams as any)
            Sinon.stub(Teams, 'findByPk').resolves(userMockTeams[0] as any)
          });
      
          after(() => {
            Sinon.restore();
          });
        it('Testando rota de /teams', async () => {
            const response = await chai.request(app).get('/teams').send();

            chai.expect(response.status).to.equal(200);
            chai.expect(response.body).to.deep.equal(userMockTeams)
        });
        it('Testando rota de /teams/:id', async () => {
            const response = await chai.request(app).get('/teams/1').send();

            chai.expect(response.status).to.equal(200);
            chai.expect(response.body).to.deep.equal(userMockTeams[0])
        });
    });
});
