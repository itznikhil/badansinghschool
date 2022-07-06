import React, { useContext, useEffect } from "react";
import { useNavigate, Outlet } from "react-router-dom";
import { AuthContext } from "./Auth";

export const ProtectedRoutes = () => {
  const { isLoggedIn } = useContext(AuthContext);
  const navigate = useNavigate();
  useEffect(() => {
    if (!isLoggedIn) {
      localStorage.removeItem("token");
      navigate("/login");
    }
  }, [isLoggedIn]);
  return <Outlet />;
};
