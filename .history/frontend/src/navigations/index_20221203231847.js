import { useState } from "react";

import AuthRoutes from "./AuthRoutes";
import MainRoutes from "./MainRoutes";

const Navigation = () => {
  const [isInitialized, setIsInitialized] = useState(false);

  if (isInitialized) return <MainRoutes />;

  return <AuthRoutes />;
};

export default Navigation;
