export interface IUser {
  name: string;
  password: string
}

export interface IUserSchema {
  dataAuth?: IUser;
  _initialized: boolean
}
