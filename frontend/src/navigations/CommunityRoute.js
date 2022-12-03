import { Routes, Route, Navigate } from "react-router-dom";

import Community from "../pages/Community/Community";

const CommunityRoute = () => {
  return (
    <Routes>
      <Route path="/" element={<Community />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
};

export default CommunityRoute;
