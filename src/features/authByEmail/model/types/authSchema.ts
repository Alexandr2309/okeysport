export enum ValidateAuthErrors {
  INCORRECT_EMAIL = 'INCORRECT_EMAIL',
  INCORRECT_PASSWORD = 'INCORRECT_PASSWORD',
  SERVER_ERROR = 'SERVER_ERROR',
  USER_NOT_FOUND = 'USER_NOT_FOUND',
  NO_DATA = 'NO_DATA',
}

export interface IAuthSchema {
  email: string;
  password: string;
  validateErrors?: ValidateAuthErrors[];
}
