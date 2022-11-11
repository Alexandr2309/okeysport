export interface IUser {
  id: string;
  username: string;
  email: string;
}

export interface IUserSchema {
  dataAuth?: IUser;
  _initialized: boolean;
}
