import { useContext } from 'react';

import { AppContext } from '../contexts/app.context';

const useAppContext = () => {
  const context = useContext(AppContext);

  return context;
};

export default useAppContext;
