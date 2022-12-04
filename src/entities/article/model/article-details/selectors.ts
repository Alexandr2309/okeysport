import { IStateSchema } from 'app/providers/storeProvider';

export const getArticleDetailsIsLoading = (state: IStateSchema) =>
  state.articleDetails?.isLoading ?? false;
export const getArticleDetailsError = (state: IStateSchema) =>
  state.articleDetails?.error ?? '';
export const getArticleDetailsData = (state: IStateSchema) =>
  state.articleDetails?.data;
