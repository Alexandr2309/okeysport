import { configureStore, ReducersMapObject } from '@reduxjs/toolkit';
import { userReducer } from 'entities/User/model/slice/userSlice';
import { IStateSchema } from './stateSchema';
import { createReducerManager } from './reducerManager';

export function createReduxStore(
  initialState?: IStateSchema,
  asyncReducers?: ReducersMapObject<IStateSchema>,
) {
  const rootReducers: ReducersMapObject<IStateSchema> = {
    ...asyncReducers,
    user: userReducer,
  };

  const reducerManager = createReducerManager(rootReducers);

  const store = configureStore({
    reducer: reducerManager.reduce,
    devTools: __IS__DEV__,
    preloadedState: initialState,
  });

  // @ts-ignore
  store.reducerManager = reducerManager;

  return store;
}
