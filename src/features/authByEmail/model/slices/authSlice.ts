import { createSlice } from '@reduxjs/toolkit';
import { IAuthSchema, ValidateAuthErrors } from '../types/authSchema';
import { authUserByEmail } from 'features/authByEmail/model/services/authByEmail';

const initialState: IAuthSchema = {
  email: '',
  validateErrors: [],
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
  extraReducers: (builder) => {
    builder.addCase(authUserByEmail.rejected, (state, action) => {
      state.validateErrors = action.payload;
    });
  },
});

export const { actions: authFormActions } = authFormSlice;
export const { reducer: authFormReducer } = authFormSlice;
