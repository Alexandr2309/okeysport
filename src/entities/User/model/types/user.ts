export type UserRole = 'ADMIN' | 'USER';
export interface IUser {
  id: string;
  username: string;
  email: string;
  role: UserRole;
}

export interface IUserSchema {
  dataAuth?: IUser;
  _initialized: boolean;
}
