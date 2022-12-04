import { TypeEvents } from "shared/const/events";

export interface IOrderSchema {
  name: string;
  phone: string;
  mail: string;
  type: TypeEvents;
  comment?: string;
}
