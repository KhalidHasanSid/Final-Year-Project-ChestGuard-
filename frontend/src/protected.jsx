import React from "react";
import { Navigate } from "react-router-dom";

function  Protected({ children }) {
  const isAuthenticated = !!localStorage.getItem("authToken"); // Check if token exists

  if (!isAuthenticated) {
    return <Navigate to="/login" />;
  }
  return (children);
};

export default Protected;