import React from "react";
import FormSignin from "./components/Form";
import {
  AdminDashboard,
  UserFeed,
  UserSignIn,
  AdminSignIn,
  UpdateUser,
} from "./pages";
import { Routes, Route, Outlet, Navigate } from "react-router-dom";
import axios from "axios";

axios.defaults.baseURL = "http://localhost:5000";

const ProtectedRoute = () => {
  const isAuth = localStorage.getItem("access");
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
