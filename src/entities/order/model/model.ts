import { TypeEvents } from 'shared/const/events';

export enum ValidateOrderErrors {
  INCORRECT_USERNAME = 'INCORRECT_USERNAME',
  INCORRECT_EMAIL = 'INCORRECT_EMAIL',
  INCORRECT_PHONE = 'INCORRECT_PHONE',
  INCORRECT_TYPE = 'INCORRECT_TYPE',
  SERVER_ERROR = 'SERVER_ERROR',
  NO_DATA = 'NO_DATA',
}
export interface IOrderSchema {
  name: string;
  phone: string;
  email: string;
  type: TypeEvents;
  comment?: string;
  validateErrors?: ValidateOrderErrors[];
}
