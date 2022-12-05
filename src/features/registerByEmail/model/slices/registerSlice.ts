import { createSlice } from '@reduxjs/toolkit';
import { IRegisterSchema } from '../types/registerSchema';
import { registerUserByEmail } from '../services/registerUserByEmail/registerUserByEmail';

const initialState: IRegisterSchema = {
  username: '',
  email: '',
  error: undefined,
  isLoading: false,
  password: '',
  verifiedPassword: '',
  validateErrors: undefined,
};

export const registerSlice = createSlice({
  name: 'register',
  initialState,
  reducers: {
    setUsername: (state, action) => {
      state.username = action.payload;
    },
    setPassword: (state, action) => {
      state.password = action.payload;
    },
    setVerifiedPassword: (state, action) => {
      state.verifiedPassword = action.payload;
    },
    setEmail: (state, action) => {
      state.email = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(registerUserByEmail.pending, (state) => {
        state.isLoading = true;
        state.error = state.validateErrors = undefined;
      })
      .addCase(registerUserByEmail.fulfilled, (state, action) => {
        state.isLoading = false;
        state.validateErrors = [];
        state.password = '';
        state.verifiedPassword = '';
        state.email = '';
        state.username = '';
      })
      .addCase(registerUserByEmail.rejected, (state, action) => {
        state.isLoading = false;
        state.validateErrors = action.payload;
      });
  },
});

export const { actions: registerActions } = registerSlice;
export const { reducer: registerReducer } = registerSlice;
