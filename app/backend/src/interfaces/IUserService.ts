import PersonalError from '../utils/PersonalError';

interface IUserService {
  login(
    email: string,
    password: string
  ): Promise<PersonalError | Record<string, string>>;
}

export default IUserService;
