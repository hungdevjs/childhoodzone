import { Routes, Route, Navigate } from "react-router-dom";

import Parties from "../pages/Parties/Parties";

const PartiesRoute = () => {
  return (
    <Routes>
      <Route path="/parties" element={<Parties />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
};

export default PartiesRoute;
