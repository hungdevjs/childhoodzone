import { Routes, Route, Navigate } from "react-router-dom";

import Home from "../pages/Home/index";
import MediaDetail from "../pages/Media/MediaDetail";

const HomeRoute = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="home/:id" element={<MediaDetail />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
};

export default HomeRoute;
