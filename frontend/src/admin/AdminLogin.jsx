import React from 'react'
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios'

function AdminLogin(){
    const [AdminCardNo ,setAdminCardNo]=React.useState("")
  const [email ,setEmail]=React.useState("")
  const [password ,setPassword]=React.useState("") 
  const navigate = useNavigate();

  const abc= async(e)=>{
    e.preventDefault();
    console.log(email,"password",password)
   
    try {
      const response = await axios.post('http://localhost:4500/api/v1/chestguarduser/AdminloginFYP', {
        email: email, 
        password: password,
      }, { withCredentials: true }); 

      console.log('Login successful:', response, "token is here ", response.data.data.access);
     
      
      localStorage.setItem('Accesstoken', response.data.data.access);
      localStorage.setItem('Refreshtoken', response.data.data.refresh);
      localStorage.setItem('loginTimestamp', Date.now());

      navigate('/Adminhome');
      
    } catch (err) {
      console.error("Login error:", err);
    }
  }

  return(
    <>
    <h1 className="text-3xl font-bold underline">heloo world</h1>
    <label  >AdminCardNo:</label>
    <input  onChange={(e)=> setAdminCardNo(e.target.value)} type="number " />
      <label  >Email:</label>
      <input  onChange={(e)=> setEmail(e.target.value)} type="text" />
      <label >Password:</label>
      <input onChange={(e)=> setPassword(e.target.value)} type="password" />
      <button onClick={abc} >Login</button>
      <Link to ="/Adminregistration"><button>Register</button></Link>
    </>
  );
}

export default AdminLogin;
