import { IStateSchema } from 'app/providers/storeProvider';

export const getArticlesListHasMore = (state: IStateSchema) =>
  state.articlesList?.hasMore ?? true;
export const getArticlesListIsLoading = (state: IStateSchema) =>
  state.articlesList?.isLoading ?? false;

export const getArticlesListLimit = (state: IStateSchema) =>
  state.articlesList?.limit ?? 8;

export const getArticlesListError = (state: IStateSchema) =>
  state.articlesList?.error;
