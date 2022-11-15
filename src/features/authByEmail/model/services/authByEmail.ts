import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  createUserWithEmailAndPassword,
  getAuth,
  User,
  signInWithEmailAndPassword,
} from 'firebase/auth';
import { ThunkApiConfig } from 'app/providers/storeProvider/config/stateSchema';
import { userActions } from 'entities/User/model/slice/userSlice';
import { authFormActions } from 'features/authByEmail/model/slices/authSlice';

export interface IAuthUserByEmailProps {
  password: string;
  email: string;
}

export const authUserByEmail = createAsyncThunk<User,
IAuthUserByEmailProps,
ThunkApiConfig<string>>(
  'auth/authUserByEmail',
  async (data, thunkAPI) => {
    const {
      rejectWithValue,
      dispatch,
    } = thunkAPI;

    try {
      const auth = getAuth();
      const response = await signInWithEmailAndPassword(auth, data.email, data.password);
      console.log(response);
      if (!response || !response.user) {
        throw new Error();
      }

      dispatch(userActions.setAuthData({
        id: response.user.uid,
        email: data.email,
      }));

      dispatch(authFormActions.setPassword(''));
      dispatch(authFormActions.setEmail(''));

      return response.user;
    } catch (e) {
      return rejectWithValue('error');
    }
  },
);
