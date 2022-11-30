import React from 'react';
import { Provider } from 'react-redux';
import { createReduxStore } from '../config/store';

interface IStoreProviderProps {
  children: React.ReactNode;
}

export const StoreProvider = ({ children }: IStoreProviderProps) => {
  const store = createReduxStore();

  return <Provider store={store}>{children}</Provider>;
};
