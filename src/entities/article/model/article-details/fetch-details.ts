import { createAsyncThunk } from '@reduxjs/toolkit';
import { Article } from '../types';
import { ThunkApiConfig } from 'app/providers/storeProvider/config/stateSchema';

export const fetchArticleDetails = createAsyncThunk<
  Article,
  string,
  ThunkApiConfig<string>
>('article-details/fetchArticleDetails', async (articleId, thunkAPI) => {
  const { extra, getState, rejectWithValue } = thunkAPI;

  try {
    const response = await extra.api.get<Article>(`/articles/${articleId}`);

    if (!response.data) {
      throw new Error();
    }
    console.log(response.data);
    return response.data;
  } catch (e) {
    return rejectWithValue('empty data');
  }
});
