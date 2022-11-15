import { IStateSchema } from 'app/providers/storeProvider';

export const getRegisterUsername = (state: IStateSchema) => state?.register?.username || '';
export const getRegisterPassword = (state: IStateSchema) => state?.register?.password || '';
export const getRegisterVerifiedPassword = (state: IStateSchema) => state?.register?.verifiedPassword || '';
export const getRegisterEmail = (state: IStateSchema) => state?.register?.email || '';
export const getRegisterError = (state: IStateSchema) => state?.register?.error || '';
export const getRegisterIsLoading = (state: IStateSchema) => state?.register?.isLoading;
