import * as sinon from 'sinon';
import * as chai from 'chai';
// @ts-ignore
import chaiHttp = require('chai-http');
import User from '../database/models/users'
import IModel from '../interfaces/IModel'

import { app } from '../app';
import Example from '../database/models/ExampleModel';

import { Response } from 'superagent';
import UserService from '../services/user.service';

chai.use(chaiHttp);

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
const password = '123456'
const PASSWORD_INVALID = '1234567'

describe('Testando o User.service', () => {
  const userModel = {
    findOne: () => Promise.resolve(userMock as User),
  }

  const userModelError = {
    findOne: () => Promise.resolve(),
  }

  const service = new UserService(userModel);
  const serviceError = new UserService(userModelError);

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

  it('se ao enviar um email invalido não é gerado um token', async () => {
    const user = await serviceError.login(EMAIL_INVALID, password);
    expect(user).not.to.be.key('token');
    expect(user).to.be.instanceOf(Error);
    expect(user).to.be.property('statusCode', 401);
    expect(user).to.be.property('message', 'Incorrect email or password');
    
  });
});
