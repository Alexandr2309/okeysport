import { IStateSchema } from 'app/providers/storeProvider';

export const getAuthEmail = (state: IStateSchema) => state?.authForm?.email || '';
export const getAuthPassword = (state: IStateSchema) => state?.authForm?.password || '';
export const getAuthError = (state: IStateSchema) => state?.authForm?.error || '';
