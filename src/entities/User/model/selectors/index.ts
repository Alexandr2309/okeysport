import { IStateSchema } from 'app/providers/storeProvider';

export const getUserInitialized = (state: IStateSchema) =>
  state?.user?._initialized ?? false;

export const getUserAuthData = (state: IStateSchema) => state?.user?.dataAuth;
