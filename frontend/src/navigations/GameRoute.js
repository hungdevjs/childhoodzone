import { Routes, Route, Navigate } from 'react-router-dom';

import GameList from '../pages/Game/GameList';
import GameDetail from '../pages/Game/GameDetail';

const GameRoute = () => {
  return (
    <Routes>
      <Route path="/" element={<GameList />} />
      <Route path="/:id" element={<GameDetail />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
};

export default GameRoute;
