import React from 'react';
import { Provider } from "react-redux";

interface IStoreProvider {
  children: React.ReactNode
}

const StoreProvider = ({children}:IStoreProvider) => {
  return (
    <Provider store={}>
      {children}
    </Provider>
  );
};

export default StoreProvider;
