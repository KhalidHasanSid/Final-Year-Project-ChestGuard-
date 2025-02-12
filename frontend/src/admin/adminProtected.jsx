import React from "react";
import { Navigate } from "react-router-dom";

function AdminProtected({ children }) {
  const token = localStorage.getItem("AdminAccesstoken"); 
 

  if (!token ) {
    console.log("cant find sorry")
    return <Navigate to="/Adminlogin" />;
  }


 

 
  

  return children;
};

export default AdminProtected;