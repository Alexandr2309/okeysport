import { createAsyncThunk } from '@reduxjs/toolkit';
import { IApplication } from 'entities/application/model/types';
import { ThunkApiConfig } from 'app/providers/storeProvider';

export const fetchApplications = createAsyncThunk<
  IApplication[],
  void,
  ThunkApiConfig<string>
>('application/fetchApplications', async (_, thunkAPI) => {
  const { extra, rejectWithValue, getState } = thunkAPI;

  try {
    const response = await extra.api.get('/applications');

    if (!response || !response.data) {
      throw new Error();
    }

    return response.data;
  } catch (e) {
    return rejectWithValue('error');
  }
});
