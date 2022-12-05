export enum ValidateRegisterError {
  INCORRECT_USERNAME = 'INCORRECT_USERNAME',
  INCORRECT_EMAIL = 'INCORRECT_EMAIL',
  INCORRECT_PASSWORD = 'INCORRECT_PASSWORD',
  PASSWORD_DON_MATCH = 'PASSWORD_DON_MATCH',
  SERVER_ERROR = 'SERVER_ERROR',
  NO_DATA = 'NO_DATA',
}

export interface IRegisterSchema {
  username: string;
  password: string;
  verifiedPassword: string;
  email: string;
  isLoading: boolean;
  error?: string;
  validateErrors?: ValidateRegisterError[];
}
