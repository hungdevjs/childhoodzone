import { Routes, Route, Navigate } from "react-router-dom";

import Media from "../pages/Media/Media";
import MediaDetail from "../pages/Media/MediaDetail";

const MediaRoute = () => {
  return (
    <Routes>
      <Route path="/" element={<Media />} />
      <Route path="/:id" element={<MediaDetail />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
};

export default MediaRoute;
