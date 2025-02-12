import React from 'react'
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios'

function AdminLogin(){
    const [AdminCardNo ,setAdminCardNo]=React.useState("")
 
  const [password ,setPassword]=React.useState("") 
  const navigate = useNavigate();

  const abc= async(e)=>{
    e.preventDefault();
    console.log(AdminCardNo,"password",password)
   
    try {
      const response = await axios.post('http://localhost:4500/api/v1/chestguard/AdminloginFYP', {
        AdminCardNo: AdminCardNo, 
        password: password,
      }, { withCredentials: true }); 
      console.log("=============check2")

      console.log('Login successful:', response, "token sssss ", response.data.data.access);
     
      
      localStorage.setItem('AdminAccesstoken', response.data.data.access);
      localStorage.setItem('AdminRefreshtoken', response.data.data.refresh);
      localStorage.setItem('AdminloginTimestamp', Date.now());
      console.log("=============check3")

      navigate('/dashboard');
      
    } catch (err) {
      console.error("Login error:", err);
    }
  }

  return(
    <>
    <h1 className="text-3xl font-bold underline">heloo world</h1>
    <label  >AdminCardNo:</label>
    <input  onChange={(e)=> setAdminCardNo(e.target.value)} type="number " />
     
      <label >Password:</label>
      <input onChange={(e)=> setPassword(e.target.value)} type="password" />
      <button onClick={abc} >Login</button>
      <Link to ="/Adminregistration"><button>Register</button></Link>
    </>
  );
}

export default AdminLogin;
