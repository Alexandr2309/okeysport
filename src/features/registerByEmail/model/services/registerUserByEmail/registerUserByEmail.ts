import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkApiConfig } from 'app/providers/storeProvider/config/stateSchema';
import { IUser } from 'entities/User';
import { ValidateRegisterError } from '../../types/registerSchema';
import { validateRegisterData } from '../../../lib';

export interface IRegisterUserByEmailProps {
  username: string;
  password: string;
  verifiedPassword: string;
  email: string;
}

export const registerUserByEmail = createAsyncThunk<
  IUser,
  IRegisterUserByEmailProps,
  ThunkApiConfig<ValidateRegisterError[]>
>('register/registerUserByEmail', async (data, thunkAPI) => {
  const { rejectWithValue, dispatch, extra } = thunkAPI;

  const errors = validateRegisterData(data);

  if (errors.length) {
    return rejectWithValue(errors);
  }

  const registerData = JSON.parse(JSON.stringify(data));
  delete registerData.verifiedPassword;

  try {
    const response = await extra.api.post('/register', registerData, {
      headers: {
        AUTHORIZATION: 'exapmel',
      },
    });

    if (!response || !response.data) {
      throw new Error();
    }

    return response.data;
  } catch (e) {
    return rejectWithValue([ValidateRegisterError.SERVER_ERROR]);
  }
});
