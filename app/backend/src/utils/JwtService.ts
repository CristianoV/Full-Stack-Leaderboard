import * as jtw from 'jsonwebtoken';

export default class JwtSecret {
  private static algorithm = { algorithm: 'HS256' } as Record<string, string>;
  private static segredo = process.env.JWT_SECRET || 'jwt_secret';

  public static sign(payload: Record<string, string>): string {
    return jtw.sign(payload, this.segredo, this.algorithm);
  }
}
