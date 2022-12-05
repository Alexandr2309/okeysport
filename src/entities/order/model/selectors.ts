import { IStateSchema } from 'app/providers/storeProvider';
import { createSelector } from '@reduxjs/toolkit';
import { ValidateOrderErrors } from './model';
import { TypeEvents } from 'shared/const/events';

export const getName = (state: IStateSchema) => state.order?.name ?? '';
export const getEmail = (state: IStateSchema) => state.order?.email ?? '';
export const getPhone = (state: IStateSchema) => state.order?.phone ?? '';
export const getComment = (state: IStateSchema) => state.order?.comment ?? '';
export const getEventType = (state: IStateSchema) =>
  state.order?.type || TypeEvents.TOURNAMENT;

export const getOrderValidateErrors = (state: IStateSchema) =>
  state.order?.validateErrors ?? [];

export const getAllOrderData = createSelector(
  getName,
  getEmail,
  getPhone,
  getComment,
  getEventType,
  (name, email, phone, comment, type) => ({ name, email, phone, comment, type })
);

export const getOrderErrors = createSelector(
  getOrderValidateErrors,
  (errors) => ({
    username: errors.includes(ValidateOrderErrors.INCORRECT_USERNAME),
    phone: errors.includes(ValidateOrderErrors.INCORRECT_PHONE),
    type: errors.includes(ValidateOrderErrors.INCORRECT_TYPE),
    email: errors.includes(ValidateOrderErrors.INCORRECT_EMAIL),
    server: errors.includes(ValidateOrderErrors.SERVER_ERROR),
    noData: errors.includes(ValidateOrderErrors.NO_DATA),
  })
);
