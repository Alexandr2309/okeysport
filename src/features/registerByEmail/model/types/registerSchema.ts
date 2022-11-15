export interface IRegisterSchema {
  username: string;
  password: string;
  verifiedPassword: string;
  email: string;
  isLoading: boolean;
  error?: string;
}
