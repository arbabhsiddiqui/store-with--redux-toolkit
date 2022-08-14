import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
const RequireAdmin = () => {
  const { user } = useSelector((state) => state.auth);
  return user && user.isAdmin == true ? (
    <Outlet />
  ) : user ? (
    <Navigate to="/unauthorized" />
  ) : (
    <Navigate to="/login" />
  );
};

export default RequireAdmin;
