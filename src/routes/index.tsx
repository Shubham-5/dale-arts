import React from "react";
import { Routes, Route, Navigate } from "react-router";

import Dashboard from "../modules/dashboard";
import Login from "../modules/auth/login";
import Register from "../modules/auth/register";

import { useAuth } from "../context/auth-context";

const AppRoutes = () => {
  const { user } = useAuth();
  return (
    <Routes>
      <Route
        path="/"
        element={user ? <Dashboard /> : <Navigate to="/login" replace />}
      />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
    </Routes>
  );
};

export default AppRoutes;
