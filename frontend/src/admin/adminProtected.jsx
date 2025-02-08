import React from "react";
import { Navigate } from "react-router-dom";

function AdminProtected({ children }) {
  const token = localStorage.getItem("Accesstoken"); 
 

  if (!token ) {
    return <Navigate to="/Adminlogin" />;
  }


 

 
  

  return children;
};

export default AdminProtected;