import { Routes, Route, Navigate } from 'react-router-dom';

import AudioList from '../pages/Audio/AudioList';
import AudioDetail from '../pages/Audio/AudioDetail';

const AudioRoute = () => {
  return (
    <Routes>
      <Route path="/" element={<AudioList />} />
      <Route path="/:id" element={<AudioDetail />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
};

export default AudioRoute;
