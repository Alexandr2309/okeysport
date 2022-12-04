import { createSlice } from '@reduxjs/toolkit';
import { IApplicationStateSchema } from '../types';
import { fetchApplications } from 'entities/application';

const initialState: IApplicationStateSchema = {
  data: [],
  isLoading: false,
  error: undefined,
};

export const applicationTableModel = createSlice({
  name: 'applicationTable',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchApplications.pending, (state) => {
        state.isLoading = true;
        state.error = undefined;
      })
      .addCase(fetchApplications.fulfilled, (state, action) => {
        state.isLoading = false;
        state.data = action.payload;
      })
      .addCase(fetchApplications.rejected, (state, action) => {
        state.error = action.payload;
        state.isLoading = false;
      });
  },
});

export const { actions: appTableActions } = applicationTableModel;
export const { reducer: appTableReducer } = applicationTableModel;
