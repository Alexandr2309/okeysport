import { createAsyncThunk } from '@reduxjs/toolkit';
import { getAllOrderData } from 'entities/order';
import { ThunkApiConfig } from 'app/providers/storeProvider/config/stateSchema';

export const sendOrder = createAsyncThunk<void, void, ThunkApiConfig<string>>(
  'order/sendOrder',
  async (_, thunkAPI) => {
    const { extra, rejectWithValue, dispatch, getState } = thunkAPI;
    const data = getAllOrderData(getState());
    console.log(data);
  }
);
