import { createAsyncThunk } from '@reduxjs/toolkit';

export const sendOrder = createAsyncThunk(
  'order/sendOrder',
  async (_, thunkAPI) => {
    const {
      extra, rejectWithValue, dispatch, getState,
    } = thunkAPI;
  },
);
