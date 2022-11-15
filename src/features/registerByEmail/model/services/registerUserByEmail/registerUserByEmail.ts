import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  createUserWithEmailAndPassword, getAuth, User, updateProfile,
} from 'firebase/auth';
import { ThunkApiConfig } from 'app/providers/storeProvider/config/stateSchema';
import { userActions } from 'entities/User/model/slice/userSlice';

export interface IRegisterUserByEmailProps {
  username: string;
  password: string;
  email: string;
}

export const registerUserByEmail = createAsyncThunk<User,
IRegisterUserByEmailProps,
ThunkApiConfig<string>>(
  'register/registerUserByEmail',
  async (data, thunkAPI) => {
    const {
      rejectWithValue,
      dispatch,
    } = thunkAPI;
    try {
      const auth = getAuth();
      const response = await createUserWithEmailAndPassword(auth, data.email, data.password);
      console.log(response);
      if (!response || !response.user) {
        throw new Error();
      }

      dispatch(userActions.setAuthData({
        id: response.user.uid,
        email: data.email,
        username: data.username,
      }));

      updateProfile(
        response.user,
        { displayName: data.username },
      );

      return response.user;
    } catch (e) {
      return rejectWithValue('error');
    }
  },
);
