import { Routes, Route, Navigate } from "react-router-dom";

import FriendDetail from "../pages/Friends/components/FriendDetail";
import Friends from "../pages/Friends/Friends";

const FriendsRoute = () => {
  return (
    <Routes>
      <Route path="/friends" element={<Friends />} />
      <Route path="/friends/:id" element={<FriendDetail />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
};

export default FriendsRoute;
