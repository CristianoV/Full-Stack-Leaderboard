import bcrypt = require('bcryptjs');

export default class BcryptService {
  private static salt = 10;

  public static encrypt(text: string): string {
    return bcrypt.hashSync(text, this.salt);
  }

  public static compare(encryptText: string, planText: string): boolean {
    return bcrypt.compareSync(planText, encryptText);
  }
}
