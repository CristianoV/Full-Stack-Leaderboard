import PersonalError from '../utils/PersonalError';
import JwtSecret from '../utils/JwtService';
import IUserService from '../interfaces/IUserService';
import BcryptService from '../utils/BcriptService';

class UserService implements IUserService {
  constructor(private userModel: any) { }

  public async login(email: string, password: string) {
    if (!email || !password) return new PersonalError('All fields must be filled', 400);
    const findByEmail = await this.userModel.findOne({
      where: { email },
    });

    if (!findByEmail) return new PersonalError('Incorrect email or password', 401);

    const verifyPassword = BcryptService.compare(findByEmail.password, password);

    if (!verifyPassword) return new PersonalError('Incorrect email or password', 401);
    if (verifyPassword) {
      const { role } = findByEmail;
      const token = JwtSecret.sign({ role });

      return { token };
    }
  }

  public static validateLogin(token: any) {
    const validate = JwtSecret.decode(token);
    return validate;
  }
}

export default UserService;
