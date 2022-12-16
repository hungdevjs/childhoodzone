import { Routes, Route, Navigate } from 'react-router-dom';

import Logout from '../pages/Logout';

const LogoutRoute = () => {
  return (
    <Routes>
      <Route path="/" element={<Logout />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
};

export default LogoutRoute;
