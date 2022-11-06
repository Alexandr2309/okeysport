import { createSlice } from '@reduxjs/toolkit';
import { IUserSchema } from '../types/User';

const initialState: IUserSchema = {
  _initialized: false,
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {

  },
});

export const { actions: userActions } = userSlice;
export const { reducer: userReducer } = userSlice;
