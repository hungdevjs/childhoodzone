import { Routes, Route, Navigate } from "react-router-dom";

import Login from "../pages/Login/Login";
import SignUp from "../pages/SignUp/SignUp";

const AuthRoutes = () => {
    return <Routes>
        <Route path="/login" element={<Login/>}/>
        <Route path="/register" element={<SignUp/>}/>
        <Route path="*" element={<Navigate to"/login" replace/>}/>
    </Routes>
};

export default AuthRoutes;
