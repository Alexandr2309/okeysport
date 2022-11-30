import { IStateSchema } from 'app/providers/storeProvider';
import { createSelector } from '@reduxjs/toolkit';

export const getName = (state: IStateSchema) => state.order?.name ?? '';
export const getEmail = (state: IStateSchema) => state.order?.mail ?? '';
export const getPhone = (state: IStateSchema) => state.order?.phone ?? '';
export const getComment = (state: IStateSchema) => state.order?.comment ?? '';
export const getEventType = (state: IStateSchema) => state.order?.type;

export const getAllOrderData = createSelector(
  getName,
  getEmail,
  getPhone,
  getComment,
  getEventType,
  (...args) => ({ ...args })
);
