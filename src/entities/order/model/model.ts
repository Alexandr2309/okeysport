import { TypeEvents } from 'entities/events';

export interface IOrderSchema {
  name: string;
  phone: string;
  mail: string;
  type: TypeEvents;
  comment?: string;
}
