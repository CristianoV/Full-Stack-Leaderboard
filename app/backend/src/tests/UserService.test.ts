import * as chai from 'chai';
// @ts-ignore
import User from '../database/models/users';
import UserService from '../services/user.service';
import * as Sinon from 'sinon';

const { expect } = chai;

const userMock = {
  id: 1,
  username: 'CristianoV',
  role: 'admin',
  email: 'admin@admin.com',
  password: '$2a$10$XrjaUmRNcosjtK5LYWBAveoiBxaY91iYzP/Iz79UNhKXr.pCIEZkS',
};

const email = 'teste@teste.com';
const EMAIL_INVALID = 'error@error.com';
const password = '123456';
const PASSWORD_INVALID = '1234567';
const TOKEN =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYWRtaW4iLCJpYXQiOjE2NjQ0NzgyNTd9.I4bUZxWW4Y9AKJH7d1scfJjM4_WigatGzhaD7TcCGaQ';

describe('Testando o User.service', () => {
  // const userModel = {
  //   findOne: Sinon.stub(User, 'findOne').resolves(userMock as User),
  // };

  // const userModelError = {
  //   findOne: () => Promise.resolve(),
  // };

  const service = new UserService(User);

  describe('Testando Login', () => {
    describe('Email Valido', () => {
      before(async () => {
        Sinon.stub(User, 'findOne').resolves(userMock as User);
      });

      after(() => {
        (User.findOne as sinon.SinonStub).restore();
      });

      it('se ao enviar dados corretor um token é gerado', async () => {
        const user = await service.login(email, password);
        

        expect(user).to.be.key('token');
      });

      it('se ao enviar uma senha invalida não é gerado um token', async () => {
        const user = await service.login(email, PASSWORD_INVALID);

        expect(user).not.to.be.key('token');
        expect(user).to.be.instanceOf(Error);
        expect(user).to.be.property('statusCode', 401);
        expect(user).to.be.property('message', 'Incorrect email or password');
      });
    });

    describe('Email', () => {

      before(async () => {
        Sinon.stub(User, 'findOne').resolves();
      });

      after(() => {
        (User.findOne as sinon.SinonStub).restore();
      });

      it('se ao enviar um email invalido não é gerado um token', async () => {
        const user = await service.login(EMAIL_INVALID, password);

        expect(user).not.to.be.key('token');
        expect(user).to.be.instanceOf(Error);
        expect(user).to.be.property('statusCode', 401);
        expect(user).to.be.property('message', 'Incorrect email or password');
      });
    });
  });

  describe('Testando validateLogin', () => {
    it('se ao enviar um token valido é retornado o role', () => {
      const validate = UserService.validateLogin(TOKEN);
      expect(validate).to.be.keys('role', 'iat');
      expect(validate).to.be.property('role', 'admin');
    });
  });
});
