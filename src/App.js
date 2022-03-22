import React from "react";

import {
  AdminDashboard,
  UserFeed,
  UserSignIn,
  AdminSignIn,
  UpdateUser,
} from "./pages";
import { Routes, Route, Outlet, Navigate } from "react-router-dom";
import axios from "axios";

axios.defaults.baseURL = "https://followdegree.herokuapp.com/";

const ProtectedRoute = () => {
  const isAuth =
    localStorage.getItem("access") || localStorage.getItem("access-admin");
  return isAuth ? <Outlet /> : <Navigate to="/login" />;
};

const App = () => {
  return (
    <Routes>
      <Route element={<AdminSignIn />} path="/admin" />
      <Route element={<UserSignIn />} path="/login" />
      <Route element={<ProtectedRoute />}>
        <Route element={<UserFeed />} path="/" />
        <Route element={<AdminDashboard />} path="/admin/dashboard" />
        <Route element={<UpdateUser />} path="/admin/update/:id" />
      </Route>
    </Routes>
  );
};

export default App;
