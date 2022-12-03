import { Routes, Route, Navigate } from "react-router-dom";

import Parties from "../pages/Parties/Parties";
import PartyDetail from "../pages/Parties/components/PartyDetail";

const PartiesRoute = () => {
  return (
    <Routes>
      <Route path="/" element={<Parties />} />
      <Route path="/:id" element={<PartyDetail />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
};

export default PartiesRoute;
