import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  getAllOrderData,
  IOrderSchema,
  orderActions,
  ValidateOrderErrors,
} from 'entities/order';
import { ThunkApiConfig } from 'app/providers/storeProvider';
import { validateOrderData } from '../../lib';

export type ISendOrderArgs = Omit<IOrderSchema, 'validateErrors'>;

export const sendOrder = createAsyncThunk<
  ISendOrderArgs,
  void,
  ThunkApiConfig<ValidateOrderErrors[]>
>('order/sendOrder', async (_, thunkAPI) => {
  const { extra, rejectWithValue, dispatch, getState } = thunkAPI;
  const data = getAllOrderData(getState());
  dispatch(orderActions.setValidateErrors([]));

  const errors = validateOrderData(data);

  if (errors.length) {
    dispatch(orderActions.setValidateErrors(errors));
    return rejectWithValue(errors);
  }

  try {
    const response = await extra.api.post('/applications', data);

    if (!response || !response.data) {
      throw new Error();
    }

    return response.data;
  } catch (e) {
    dispatch(
      orderActions.setValidateErrors([ValidateOrderErrors.SERVER_ERROR])
    );
    return rejectWithValue([ValidateOrderErrors.SERVER_ERROR]);
  }
});
