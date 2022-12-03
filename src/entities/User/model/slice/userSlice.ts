import { createSlice } from '@reduxjs/toolkit';
import { IUserSchema } from '../types/User';
import { USER_LOCALSTORAGE_ITEM } from 'shared/const/local-storage';

const initialState: IUserSchema = {
  _initialized: false,
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setAuthData: (state, action) => {
      state.dataAuth = action.payload;
    },
    initAuthData: (state) => {
      const user = localStorage.getItem(USER_LOCALSTORAGE_ITEM);

      if (user) {
        state.dataAuth = JSON.parse(user);
      }

      state._initialized = true;
    },
    logout: (state) => {
      state.dataAuth = undefined;
      localStorage.removeItem(USER_LOCALSTORAGE_ITEM);
    },
  },
});

export const { actions: userActions } = userSlice;
export const { reducer: userReducer } = userSlice;
