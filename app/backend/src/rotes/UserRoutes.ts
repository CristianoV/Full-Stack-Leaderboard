import { Router } from 'express';
import UserController from '../controllers/user.controller';
import UserModel from '../database/models/users';
import UserService from '../services/user.service';

const UserRoutes: Router = Router();
const userService = new UserService(UserModel);
const userController = new UserController(userService);

UserRoutes.get('/login/validate', (req, res) => UserController.validade(req, res));
UserRoutes.post('/login', (req, res) => userController.login(req, res));

export default UserRoutes;
