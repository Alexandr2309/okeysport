import { createAsyncThunk } from '@reduxjs/toolkit';
import { createUserWithEmailAndPassword, getAuth } from 'firebase/auth';
import { IUser } from 'entities/User';
import { ThunkApiConfig } from 'app/providers/storeProvider/config/stateSchema';

export interface IRegisterUserByEmailProps {
  username: string;
  password: string;
  email: string;
}

export const registerUserByEmail = createAsyncThunk<IUser,
IRegisterUserByEmailProps,
ThunkApiConfig<string>>(
  'register/registerUserByEmail',
  async (registerData, thunkAPI) => {
    const {
      rejectWithValue,
      dispatch,
    } = thunkAPI;

    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log(userCredential);
      });
  },
);
