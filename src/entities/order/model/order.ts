import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IOrderSchema, TypeEvents } from './model';

const initialState: IOrderSchema = {
  type: TypeEvents.CHAMPIONSHIP,
  name: '',
  comment: '',
  mail: '',
  phone: '',
};

const orderModel = createSlice({
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
