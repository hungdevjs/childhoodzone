import { Routes, Route, Navigate } from "react-router-dom";

import Community from "../pages/Community/Community";

const CommunityRoute = () => {
  return (
    <Routes>
      <Route path="/" element={<Community />} />
    </Routes>
  );
};

export default CommunityRoute;
