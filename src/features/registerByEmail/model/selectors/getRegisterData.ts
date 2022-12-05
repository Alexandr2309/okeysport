import { IStateSchema } from 'app/providers/storeProvider';
import { createSelector } from '@reduxjs/toolkit';
import { ValidateRegisterError } from '../types/registerSchema';

export const getRegisterUsername = (state: IStateSchema) =>
  state?.register?.username || '';
export const getRegisterPassword = (state: IStateSchema) =>
  state?.register?.password || '';
export const getRegisterVerifiedPassword = (state: IStateSchema) =>
  state?.register?.verifiedPassword || '';
export const getRegisterEmail = (state: IStateSchema) =>
  state?.register?.email || '';
export const getRegisterError = (state: IStateSchema) =>
  state?.register?.error || '';
export const getRegisterIsLoading = (state: IStateSchema) =>
  state?.register?.isLoading || false;

export const getRegisterValidateErrors = (state: IStateSchema) =>
  state?.register?.validateErrors ?? [];

export const getValidateErrorsByType = createSelector(
  getRegisterValidateErrors,
  (errors) => ({
    username: errors.includes(ValidateRegisterError.INCORRECT_USERNAME),
    email: errors.includes(ValidateRegisterError.INCORRECT_EMAIL),
    password: errors.includes(ValidateRegisterError.INCORRECT_PASSWORD),
    verifiedPassword: errors.includes(ValidateRegisterError.PASSWORD_DON_MATCH),
    noData: errors.includes(ValidateRegisterError.NO_DATA),
    server: errors.includes(ValidateRegisterError.SERVER_ERROR),
  })
);
