import { useState, useEffect } from 'react';

const useAccount = () => {
  const [isInitialized, setIsInitialized] = useState(false); // return null in navigations/index when !isInitialized
  const [user, setUser] = useState(null);

  const checkAuth = async () => {
    // !!TODO: implement logic
    setIsInitialized(true);
  };

  useEffect(() => {
    checkAuth();
  }, []);

  return { isInitialized, user, setUser };
};

export default useAccount;
