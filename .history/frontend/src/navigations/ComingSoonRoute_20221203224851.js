import { Routes, Route, Navigate } from "react-router-dom";

import ComingSoon from "../pages/ComingSoon/ComingSoon";

const ComingSoonRoute = () => {
  return (
    <Routes>
      <Route path="/comingsoon" element={<ComingSoon />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
};

export default ComingSoonRoute;
