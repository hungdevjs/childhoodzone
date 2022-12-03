import { Routes, Route, Navigate } from "react-router-dom";

import PartyDetail from "../pages/Parties/components/PartyDetail";
import Parties from "../pages/Parties/Parties";

const PartiesRoute = () => {
  return (
    <Routes>
      <Route path="/parties" element={<Parties />} />
      <Route path="/parties/:id" element={<PartyDetail />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
};

export default PartiesRoute;
