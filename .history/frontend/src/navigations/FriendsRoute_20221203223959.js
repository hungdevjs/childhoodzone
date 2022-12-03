import { Routes, Route, Navigate } from "react-router-dom";

import Friends from "../pages/Friends/Friends";

const FriendsRoute = () => {
  return (
    <Routes>
      <Route path="/friends" element={<Friends />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
};

export default FriendsRoute;
