export enum TypeEvents {
  CHAMPIONSHIP= 'CHAMPIONSHIP',
  TOURNAMENT = 'TOURNAMENT',
  COMPETITION = 'COMPETITION',
  OLYMPICS = 'OLYMPICS'
}

export interface IOrderSchema {
  name: string;
  phone: string;
  mail: string;
  type: TypeEvents;
  comment?: string
}
