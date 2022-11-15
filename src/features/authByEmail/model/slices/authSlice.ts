import { createSlice } from '@reduxjs/toolkit';
import { IAuthSchema } from '../types/authSchema';

const initialState: IAuthSchema = {
  email: '',
  error: undefined,
  password: '',
};

export const authFormSlice = createSlice({
  name: 'authForm',
  initialState,
  reducers: {
    setEmail: (state, action) => {
      state.email = action.payload;
    },
    setPassword: (state, action) => {
      state.password = action.payload;
    },
  },
});

export const { actions: authFormActions } = authFormSlice;
export const { reducer: authFormReducer } = authFormSlice;
