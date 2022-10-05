import * as chai from 'chai';
// @ts-ignore
import chaiHttp = require('chai-http');
import UserService from '../services/user.service';
import UserController from '../controllers/user.controller';
import User from '../database/models/users';
import * as Sinon from 'sinon';
import { Request, Response } from 'express';
import PersonalError from '../utils/PersonalError';

chai.use(chaiHttp);

const { expect } = chai;

describe('Testando o User.controller', () => {
  const service = new UserService(User);
  const controller = new UserController(service);

  const userMock = { email: 'teste@teste.com', password: '123456' };
  const roleMock =
    'eyJhbGciOiJIUzI1Nta0ugyqxYAvOt-dV2pryYS6oXe2E7SDNwWeGilclarw';

  describe('Testando Login sucesso', () => {
    const req = {} as Request;
    const res = {} as Response;

    before(async () => {
      Sinon.stub(service, 'login').resolves({ token: '123456' });
      res.status = Sinon.stub().returns(res);
      res.json = Sinon.stub().returns(res);
    });

    after(() => {
      Sinon.restore();
    });

    it('se ao enviar dados corretor um token é gerado', async () => {
      req.body = userMock;
      const user = await controller.login(req, res);

      expect((res.status as sinon.SinonStub).calledWith(200)).to.be.true;
      expect((res.json as sinon.SinonStub).calledWith(new User()));
    });
  });

  describe('Testando Login Erro', () => {
    const req = {} as Request;
    const res = {} as Response;

    before(async () => {
      Sinon.stub(service, 'login').resolves(
        new PersonalError('All fields must be filled', 400)
      );
      res.status = Sinon.stub().returns(res);
      res.json = Sinon.stub().returns(res);
    });

    after(() => {
      Sinon.restore();
    });

    it('se ao enviar dados corretor um token é gerado', async () => {
      req.body = userMock;
      const user = await controller.login(req, res);

      expect((user.status as sinon.SinonStub).calledWith(400)).to.be.true;
      expect((res.json as sinon.SinonStub).calledWith(new User()));
    });
  });

  describe('Testando validate', () => {
    const req = {} as Request;
    const res = {} as Response;

    before(async () => {
      res.status = Sinon.stub().returns(res);
      res.json = Sinon.stub().returns(res);
    });

    after(() => {
      Sinon.restore();
    });

    it('se ao enviar um token valido é retornado um status correto', async () => {
      req.headers = { authorization: roleMock };
      const user = await UserController.validade(req, res);

      expect((user.status as sinon.SinonStub).calledWith(200)).to.be.true;
    });
  });
});
