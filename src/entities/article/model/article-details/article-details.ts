import { createSlice } from '@reduxjs/toolkit';
import { IArticleDetailsSchema } from '../types';
import { fetchArticleDetails } from 'entities/article';

const initialState: IArticleDetailsSchema = {
  error: '',
  isLoading: false,
  data: undefined,
};

export const articleModel = createSlice({
  name: 'articleDetails',
  initialState,
  reducers: {
    setArticleDetailsData: (state, action) => {
      state.data = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchArticleDetails.pending, (state) => {
        state.error = undefined;
        state.isLoading = true;
      })
      .addCase(fetchArticleDetails.fulfilled, (state, action) => {
        state.isLoading = false;
        state.data = action.payload;
      })
      .addCase(fetchArticleDetails.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const { actions: articleDetailsActions } = articleModel;
export const { reducer: articleDetailsReducer } = articleModel;
