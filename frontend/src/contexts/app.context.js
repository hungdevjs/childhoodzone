import { createContext } from 'react';

import Loading from '../components/Loading';
import useLoading from '../hooks/useLoading';

export const AppContext = createContext();

export const AppContextProvider = ({ children }) => {
  const loadingState = useLoading();

  return (
    <AppContext.Provider
      value={{
        loadingState,
      }}
    >
      <Loading isLoading={loadingState.isLoading} />
      {children}
    </AppContext.Provider>
  );
};
