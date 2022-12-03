import { Routes, Route, Navigate } from "react-router-dom";

import ComingSoon from "../pages/ComingSoon/ComingSoon";

const ComingSoonRoute = () => {
  return (
    <Routes>
      <Route path="/" element={<ComingSoon />} />
    </Routes>
  );
};

export default ComingSoonRoute;
