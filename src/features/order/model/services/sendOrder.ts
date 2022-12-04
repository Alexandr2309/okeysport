import { createAsyncThunk } from '@reduxjs/toolkit';
import { getAllOrderData, IOrderSchema } from 'entities/order';
import { ThunkApiConfig } from 'app/providers/storeProvider';

export const sendOrder = createAsyncThunk<
  IOrderSchema,
  void,
  ThunkApiConfig<string>
>('order/sendOrder', async (_, thunkAPI) => {
  const { extra, rejectWithValue, dispatch, getState } = thunkAPI;
  const data = getAllOrderData(getState());

  try {
    const response = await extra.api.post('/applications', data);

    if (!response || !response.data) {
      throw new Error();
    }

    return response.data;
  } catch (e) {
    return rejectWithValue('error');
  }
});
