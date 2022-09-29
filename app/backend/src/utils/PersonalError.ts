export default class PersonalError extends Error {
  constructor(message: string, public statusCode: number) {
    super(message);
  }
}
