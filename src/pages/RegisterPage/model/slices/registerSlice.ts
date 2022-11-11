import { createSlice } from '@reduxjs/toolkit';
import { IRegisterSchema } from '../types/registerSchema';

const initialState: IRegisterSchema = {
  username: '',
  email: '',
  error: undefined,
  isLoading: false,
  password: '',
  verifiedPassword: '',
};

export const registerSlice = createSlice({
  name: 'register',
  initialState,
  reducers: {
    setUsername: (state, action) => {
      state.username = action.payload;
    },
    setPassword: (state, action) => {
      state.username = action.payload;
    },
    setVerifiedPassword: (state, action) => {
      state.verifiedPassword = action.payload;
    },
    setEmail: (state, action) => {
      state.username = action.payload;
    },
  },
});

export const { actions: registerActions } = registerSlice;
export const { reducer: registerReducer } = registerSlice;
