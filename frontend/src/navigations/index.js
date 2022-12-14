import { useState } from 'react';

import AuthRoutes from './AuthRoutes';
import MainRoutes from './MainRoutes';

const Navigation = () => {
  const [isInitialized, setIsInitialized] = useState(true);

  if (isInitialized) return <MainRoutes />;

  return <AuthRoutes />;
};

export default Navigation;
