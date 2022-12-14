import { Routes, Route, Navigate } from 'react-router-dom';

import Home from '../pages/Home/index';

const HomeRoute = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
};

export default HomeRoute;
