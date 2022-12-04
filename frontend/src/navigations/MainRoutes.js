import { Routes, Route } from "react-router-dom";

import CommunityRoute from "./CommunityRoute";
import DiscoveryRoute from "./DiscoveryRoute";
import ComingSoonRoute from "./ComingSoonRoute";
import FriendsRoute from "./FriendsRoute";
import PartiesRoute from "./PartiesRoute";
import MediaRoute from "./MediaRoute";
import SettingRoute from "./SettingRoute";
import HomeRoute from "./HomeRoute";

const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/community" element={<CommunityRoute />} />
      <Route path="/discovery" element={<DiscoveryRoute />} />
      <Route path="/comingsoon" element={<ComingSoonRoute />} />
      <Route path="/friends/*" element={<FriendsRoute />} />
      <Route path="/parties/*" element={<PartiesRoute />} />
      <Route path="/media" element={<MediaRoute />} />
      <Route path="/setting" element={<SettingRoute />} />
      <Route path="*" element={<HomeRoute />} />
    </Routes>
  );
};

export default MainRoutes;
