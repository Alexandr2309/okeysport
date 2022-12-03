import { createSlice } from '@reduxjs/toolkit';
import { IArticleDetailsSchema } from '../types';

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
});

export const { actions: articleDetailsActions } = articleModel;
export const { reducer: articleDetailsReducer } = articleModel;
