import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IOrderSchema } from './model';
import { TypeEvents } from "shared/const/events";

const initialState: IOrderSchema = {
  type: TypeEvents.CHAMPIONSHIP,
  name: '',
  comment: '',
  mail: '',
  phone: '',
};

export const orderModel = createSlice({
  name: 'order',
  initialState,
  reducers: {
    setType: (state, action: PayloadAction<TypeEvents>) => {
      state.type = action.payload;
    },
    setName: (state, action: PayloadAction<string>) => {
      state.name = action.payload;
    },
    setEmail: (state, action: PayloadAction<string>) => {
      state.mail = action.payload;
    },
    setComment: (state, action: PayloadAction<string>) => {
      state.comment = action.payload;
    },
    setPhone: (state, action: PayloadAction<string>) => {
      state.phone = action.payload;
    },
  },
});

export const { actions: orderActions } = orderModel;
export const { reducer: orderReducer } = orderModel;
