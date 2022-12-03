import { Routes, Route, Navigate } from "react-router-dom";

import Discovery from "../pages/Discovery/Discovery";

const DiscoveryRoute = () => {
  return (
    <Routes>
      <Route path="/" element={<Discovery />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
};

export default DiscoveryRoute;
