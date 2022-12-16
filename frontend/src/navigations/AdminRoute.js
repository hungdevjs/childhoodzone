import { Routes, Route, Navigate } from 'react-router-dom';

import MediaList from '../pages/Admin/MediaList';
import MediaDetail from '../pages/Admin/MediaDetail';
import UserList from '../pages/Admin/UserList';
import UserDetail from '../pages/Admin/UserDetail';

const AdminRoute = () => {
  return (
    <Routes>
      <Route path="/medias/" element={<MediaList />} />
      <Route path="/medias/:id" element={<MediaDetail />} />
      <Route path="/users/" element={<UserList />} />
      <Route path="/users/:id" element={<UserDetail />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
};

export default AdminRoute;
