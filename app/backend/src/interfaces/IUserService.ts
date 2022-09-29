import UserDTO from '../controllers/user/dto/UserDTO';
import User from '../database/models/users';

interface IUserService {
  create(obj: UserDTO): Promise<User>,
  login(email: string, password: string): any,
}

export default IUserService;
