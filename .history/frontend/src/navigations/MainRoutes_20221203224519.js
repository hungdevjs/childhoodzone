import {Routes, Route, Navigate} from "react-router-dom"

import CommunityRoute from "./CommunityRoute";

const MainRoutes = () => {
    return <Routes>
        <Route path="/community" element{CommunityRoute}/>
        <Route />
        <Route />
        <Route />
        <Route />
        <Route />
        <Route />
    </Routes>
}

return MainRoutes;