import { Routes, Route } from 'react-router-dom';

import SettingRoute from './SettingRoute';
import HomeRoute from './HomeRoute';
import MovieRoute from './MovieRoute';
import ComicRoute from './ComicRoute';
import GameRoute from './GameRoute';

const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/movies/*" element={<MovieRoute />} />
      <Route path="/comics/*" element={<ComicRoute />} />
      <Route path="/games/*" element={<GameRoute />} />
      <Route path="/setting/*" element={<SettingRoute />} />
      <Route path="*" element={<HomeRoute />} />
    </Routes>
  );
};

export default MainRoutes;
