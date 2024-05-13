import React from "react";
import { useAuth } from "./auth";
import { Navigate, useLocation } from "react-router-dom";

const RequireAuth = ({ children }: { children: React.ReactElement }) => {
  const auth = useAuth();
  const location = useLocation();
  if (auth.user) {
    return children;
  }
  return <Navigate to={"/login"} state={{ path: location.pathname }} />;
};

export default RequireAuth;
