import { Routes, Route, Navigate } from "react-router-dom";

import Media from "../pages/Media/Media";

const MediaRoute = () => {
  return (
    <Routes>
      <Route path="/media" element={<Media />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
};

export default MediaRoute;
