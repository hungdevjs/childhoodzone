import { Routes, Route, Navigate } from 'react-router-dom';

import Profile from '../pages/Profile';

const ProfileRoute = () => {
  return (
    <Routes>
      <Route path="/" element={<Profile />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
};

export default ProfileRoute;
