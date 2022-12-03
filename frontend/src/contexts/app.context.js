import { createContext } from 'react';

import Loading from '../components/Loading';
import useLoading from '../hooks/useLoading';
import useAccount from '../hooks/useAccount';

export const AppContext = createContext();

export const AppContextProvider = ({ children }) => {
  const loadingState = useLoading();
  const accountState = useAccount();

  return (
    <AppContext.Provider
      value={{
        loadingState,
        accountState,
      }}
    >
      <Loading isLoading={loadingState.isLoading} />
      {children}
    </AppContext.Provider>
  );
};
