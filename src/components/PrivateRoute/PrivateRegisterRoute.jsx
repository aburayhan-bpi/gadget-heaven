import React, { useContext } from "react";
import { AuthContext } from "../../Context/ContextApi";
import { Navigate } from "react-router-dom";

const PrivateRegisterRoute = ({ children }) => {
  const { user, signOutUser } = useContext(AuthContext);

  if (user) {
    // return <Navigate to="/login" replace />;
     signOutUser;
     return <Navigate to="/login" replace />;
  }

  return children;
};

export default PrivateRegisterRoute;
