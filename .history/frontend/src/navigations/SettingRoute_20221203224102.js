import { Routes, Route, Navigate } from "react-router-dom";

import Setting from "../pages/Setting/Setting";

const SettingRoute = () => {
  return (
    <Routes>
      <Route path="/setting" element={<Setting />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
};

export default SettingRoute;
