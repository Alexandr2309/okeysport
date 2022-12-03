import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkApiConfig } from 'app/providers/storeProvider/config/stateSchema';
import { userActions } from 'entities/User/model/slice/userSlice';
import { authFormActions } from 'features/authByEmail/model/slices/authSlice';
import { IUser } from 'entities/User';
import { USER_LOCALSTORAGE_ITEM } from 'shared/const/local-storage';

export interface IAuthUserByEmailProps {
  password: string;
  email: string;
}

export const authUserByEmail = createAsyncThunk<
  IUser,
  IAuthUserByEmailProps,
  ThunkApiConfig<string>
>('auth/authUserByEmail', async (data, thunkAPI) => {
  const { rejectWithValue, dispatch, extra } = thunkAPI;

  try {
    const response = await extra.api.post('/login', data);

    if (!response || !response.data) {
      throw new Error();
    }

    const userData = response.data;
    localStorage.setItem(USER_LOCALSTORAGE_ITEM, JSON.stringify(userData));

    dispatch(
      userActions.setAuthData({
        id: userData.id,
        email: userData.email,
        username: userData.username,
        role: userData.role,
      })
    );

    dispatch(authFormActions.setPassword(''));
    dispatch(authFormActions.setEmail(''));

    return response.data;
  } catch (e) {
    return rejectWithValue('error');
  }
});
