
import React from "react";
import { useSelector } from "react-redux";
import { Outlet, Navigate } from "react-router-dom";

const AuthMiddleware = () => {
  let canConnect = true;

  const auth = useSelector((state) => state.auth);

  if (auth.isAuthenticated === false) {
    canConnect = false;
  }

  return canConnect ? <Outlet /> : <Navigate to="/login" />;
};

export default AuthMiddleware;
