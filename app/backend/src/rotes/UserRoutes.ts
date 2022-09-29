import { Router } from 'express';
import UserController from '../controllers/user/userController';
import UserModel from '../database/models/users';
import UserService from '../services/users';

const UserRoutes = Router();
const userService = new UserService(UserModel);
const userController = new UserController(userService);

UserRoutes.post('/login', (req, res) => userController.login(req, res));

export default UserRoutes;
