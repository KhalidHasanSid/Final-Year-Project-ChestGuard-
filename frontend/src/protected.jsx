import React from "react";
import { Navigate } from "react-router-dom";

function Protected({ children }) {
  const token = localStorage.getItem("Accesstoken"); 
  const loginTimestamp = localStorage.getItem("loginTimestamp");

  if (!token || !loginTimestamp) {
    return <Navigate to="/login" />;
  }
  console.log(Date.now)

  const isTokenExpired = Date.now() - parseInt(loginTimestamp) > 1 * 60 * 1000; 

  if (isTokenExpired) {
    // Token has expired, clear everything and redirect to login
    localStorage.removeItem("Accesstoken");
    localStorage.removeItem("Refreshtoken");
    localStorage.removeItem("loginTimestamp");

    return <Navigate to="/login" />;
  }

  return children;
};

export default Protected;
