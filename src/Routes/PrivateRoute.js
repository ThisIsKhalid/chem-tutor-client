import React, { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../Context/AuthProvider";
import { spinner } from "../Pages/Others/Spinner";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();

  if (loading) {
    return spinner();
  }

  if (!user) {
    return (
      <Navigate to="/signin" state={{ from: location }} replace></Navigate>
    );
  }
  return children;
};

export default PrivateRoute;
