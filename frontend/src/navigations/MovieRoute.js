import { Routes, Route, Navigate } from 'react-router-dom';

import MovieList from '../pages/Movie/MovieList';
import MovieDetail from '../pages/Movie/MovieDetail';

const MovieRoute = () => {
  return (
    <Routes>
      <Route path="/" element={<MovieList />} />
      <Route path="/:id" element={<MovieDetail />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
};

export default MovieRoute;
