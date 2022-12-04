import { TypeEvents } from 'shared/const/events';

export interface IApplication {
  id: string;
  name: string;
  email: string;
  phone: string;
  comment: string;
  type: TypeEvents;
}

export type SortOrder = 'asc' | 'desc';

export interface IApplicationStateSchema {
  isLoading: boolean;
  error?: string;
  data: IApplication[];
}
