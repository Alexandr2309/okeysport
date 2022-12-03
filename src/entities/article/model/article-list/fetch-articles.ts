import { createAsyncThunk } from '@reduxjs/toolkit';
import { Article } from '../types';
import { ThunkApiConfig } from 'app/providers/storeProvider/config/stateSchema';
import { getArticlesListLimit } from './selectors';

export const fetchArticles = createAsyncThunk<
  Article[],
  void,
  ThunkApiConfig<string>
>('article-list/fetchArticles', async (_, thunkAPI) => {
  const { extra, getState, rejectWithValue } = thunkAPI;

  const limit = getArticlesListLimit(getState());
  try {
    const response = await extra.api.get<Article[]>('/articles', {
      params: {
        _limit: limit,
      },
    });

    if (!response.data) {
      throw new Error();
    }

    return response.data;
  } catch (e) {
    return rejectWithValue('empty data');
  }
});
