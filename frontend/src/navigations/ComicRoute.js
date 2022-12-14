import { Routes, Route, Navigate } from 'react-router-dom';

import ComicList from '../pages/Comic/ComicList';
import ComicDetail from '../pages/Comic/ComicDetail';

const ComicRoute = () => {
  return (
    <Routes>
      <Route path="/" element={<ComicList />} />
      <Route path="/:id" element={<ComicDetail />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
};

export default ComicRoute;
