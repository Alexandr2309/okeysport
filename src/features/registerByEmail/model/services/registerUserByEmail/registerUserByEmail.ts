// import { createAsyncThunk } from '@reduxjs/toolkit';
// import { ThunkApiConfig } from 'app/providers/storeProvider/config/stateSchema';
// import { IUser } from 'entities/User';
//
// export interface IRegisterUserByEmailProps {
//   username: string;
//   password: string;
//   email: string;
// }
//
// export const registerUserByEmail = createAsyncThunk<
//   User,
//   IUser,
//   ThunkApiConfig<string>
// >('register/registerUserByEmail', async (data, thunkAPI) => {
//   const { rejectWithValue, dispatch } = thunkAPI;
//   try {
//     if (!response || !response.user) {
//       throw new Error();
//     }
//   } catch (e) {
//     return rejectWithValue('error');
//   }
// });
