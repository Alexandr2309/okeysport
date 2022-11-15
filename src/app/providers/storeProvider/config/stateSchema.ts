import {
  AnyAction,
  CombinedState, EnhancedStore,
  Reducer,
  ReducersMapObject,
} from '@reduxjs/toolkit';
import { IUserSchema } from 'entities/User';
import { IAuthSchema } from 'features/authByEmail';
import { IRegisterSchema } from 'features/registerByEmail';

export interface IStateSchema {
  user: IUserSchema;

  // async reducers
  register?: IRegisterSchema;
  authForm?: IAuthSchema;
}

export type StateSchemaKey = keyof IStateSchema;

export interface ReducerManager {
  getReducerMap: () => ReducersMapObject<IStateSchema>;
  reduce: (state: IStateSchema, action: AnyAction) => CombinedState<IStateSchema>;
  add: (key: StateSchemaKey, reducer: Reducer) => void;
  remove: (key: StateSchemaKey) => void;
}

export interface ReduxStoreWithManager extends EnhancedStore<IStateSchema> {
  reducerManager: ReducerManager;
}

export interface ThunkApiConfig<T> {
  rejectValue: T;
}
