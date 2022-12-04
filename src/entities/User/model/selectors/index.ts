import { IStateSchema } from 'app/providers/storeProvider';
import { createSelector } from '@reduxjs/toolkit';

export const getUserInitialized = (state: IStateSchema) =>
  state?.user?._initialized ?? false;

export const getUserAuthData = (state: IStateSchema) => state?.user?.dataAuth;

export const getUserRole = createSelector(
  getUserAuthData,
  (data) => data?.role
);
