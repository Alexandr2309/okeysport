import { IStateSchema } from 'app/providers/storeProvider';

export const getAppTableIsLoading = (state: IStateSchema) =>
  state.applicationsTable?.isLoading || false;
export const getAppTableError = (state: IStateSchema) =>
  state.applicationsTable?.error ?? '';
export const getAppTableData = (state: IStateSchema) =>
  state.applicationsTable?.data ?? [];
