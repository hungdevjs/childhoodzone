import { Routes, Route, Navigate } from 'react-router-dom';

import Login from '../pages/Login';
import SignUp from '../pages/SignUp';

const AuthRoutes = () => {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="*" element={<Navigate to="/login" replace />} />
    </Routes>
  );
};

export default AuthRoutes;
