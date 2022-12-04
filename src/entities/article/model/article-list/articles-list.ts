import { createEntityAdapter, createSlice } from '@reduxjs/toolkit';
import { IStateSchema } from 'app/providers/storeProvider';
import { Article, IArticleListSchema } from '../types';
import { fetchArticles } from 'entities/article';

const articlesAdapter = createEntityAdapter<Article>({
  selectId: (article) => article.id,
});

// Can create a set of memoized selectors based on the location of this entity state
export const getArticles = articlesAdapter.getSelectors<IStateSchema>(
  (state) => state?.articlesList || articlesAdapter.getInitialState()
);

const articlesListSlice = createSlice({
  name: 'books',
  initialState: articlesAdapter.getInitialState<IArticleListSchema>({
    error: '',
    hasMore: true,
    isLoading: false,
    limit: 8,
    ids: [],
    entities: {},
  }),
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchArticles.pending, (state) => {
        state.error = undefined;
        state.isLoading = true;
      })
      .addCase(fetchArticles.fulfilled, (state, action) => {
        state.hasMore = action.payload.length >= state.limit;
        articlesAdapter.setAll(state, action.payload);
        state.isLoading = false;
      })
      .addCase(fetchArticles.rejected, (state, action) => {
        state.error = action.payload;
        state.isLoading = false;
      });
  },
});

export const { reducer: articlesListReducer } = articlesListSlice;
export const { actions: articlesListActions } = articlesListSlice;
