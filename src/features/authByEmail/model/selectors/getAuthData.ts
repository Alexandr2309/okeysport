import { IStateSchema } from 'app/providers/storeProvider';
import { createSelector, createSlice } from '@reduxjs/toolkit';
import { ValidateAuthErrors } from 'features/authByEmail';

export const getAuthEmail = (state: IStateSchema) =>
  state?.authForm?.email || '';
export const getAuthPassword = (state: IStateSchema) =>
  state?.authForm?.password || '';
export const getValidateAuthErrors = (state: IStateSchema) =>
  state?.authForm?.validateErrors || [];

export const getAuthErrors = createSelector(
  getValidateAuthErrors,
  (errors) => ({
    email: errors.includes(ValidateAuthErrors.INCORRECT_EMAIL),
    password: errors.includes(ValidateAuthErrors.INCORRECT_PASSWORD),
    noData: errors.includes(ValidateAuthErrors.NO_DATA),
    server: errors.includes(ValidateAuthErrors.SERVER_ERROR),
    notFond: errors.includes(ValidateAuthErrors.USER_NOT_FOUND),
  })
);
