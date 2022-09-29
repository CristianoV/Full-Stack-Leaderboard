import JwtSecret from '../utils/JwtService';
import UserDTO from '../controllers/user/dto/UserDTO';
// import { UserDTO, UserDTOValidation } from '../controllers/user/dto/UserDTO';
import User from '../database/models/users';
// import IModel from '../interfaces/IModel';
import IUserService from '../interfaces/IUserService';
import BcryptService from '../utils/BcriptService';

class UserService implements IUserService {
  constructor(private userModel: any) { }

  async create(obj: UserDTO): Promise<User> {
    // await UserDTOValidation.validateAsync(obj);
    const passwordHash = BcryptService.encrypt(obj.password);
    return this.userModel.create({ passwordHash, ...obj });
  }

  public async login(email: string, password: string) {
    if (!email || !password) return { error: 'Invalid email or password' };
    const findByEmail = await this.userModel.findOne({
      where: { email },
    });

    if (!findByEmail) return { message: 'Email not found' };

    const verifyPassword = BcryptService.compare(findByEmail.password, password);

    if (!verifyPassword) return { message: 'Password incorrect' };
    if (verifyPassword) {
      const token = JwtSecret.sign({ findByEmail });

      return { token };
    }
  }
}

export default UserService;
