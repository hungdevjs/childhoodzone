import { Routes, Route } from 'react-router-dom';

import ProfileRoute from './ProfileRoute';
import HomeRoute from './HomeRoute';
import MovieRoute from './MovieRoute';
import ComicRoute from './ComicRoute';
import GameRoute from './GameRoute';
import AudioRoute from './AudioRoute';
import AdminRoute from './AdminRoute';
import LogoutRoute from './LogoutRoute';

const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/admin/*" element={<AdminRoute />} />
      <Route path="/movies/*" element={<MovieRoute />} />
      <Route path="/comics/*" element={<ComicRoute />} />
      <Route path="/audios/*" element={<AudioRoute />} />
      <Route path="/games/*" element={<GameRoute />} />
      <Route path="/profile/*" element={<ProfileRoute />} />
      <Route path="/logout/*" element={<LogoutRoute />} />
      <Route path="*" element={<HomeRoute />} />
    </Routes>
  );
};

export default MainRoutes;
