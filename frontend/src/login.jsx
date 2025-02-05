import React from 'react'
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios'

function Login(){
  const [email ,setEmail]=React.useState("")
  const [password ,setPassword]=React.useState("") 
  const navigate = useNavigate();

  const abc= async(e)=>{
    e.preventDefault();
    console.log(email,"password",password)
   
    try {
      const response = await axios.post('http://localhost:4500/api/v1/chestguarduser/loginFYP', {
        email: email, 
        password: password,
      }, { withCredentials: true }); 

      console.log('Login successful:', response, "token is here ", response.data.data.access);
     
      // Store tokens and login time in localStorage
      localStorage.setItem('Accesstoken', response.data.data.access);
      localStorage.setItem('Refreshtoken', response.data.data.refresh);
      localStorage.setItem('loginTimestamp', Date.now()); // Store the login time

      navigate('/home');
      
    } catch (err) {
      console.error("Login error:", err);
    }
  }

  return(
    <>
      <label >Email:</label>
      <input  onChange={(e)=> setEmail(e.target.value)} type="text" />
      <label >Password:</label>
      <input onChange={(e)=> setPassword(e.target.value)} type="password" />
      <button onClick={abc} >Login</button>
      <Link to ="/registration"><button>Register</button></Link>
    </>
  );
}

export default Login;
