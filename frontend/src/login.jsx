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
     
      
      localStorage.setItem('Accesstoken', response.data.data.access);
      localStorage.setItem('Refreshtoken', response.data.data.refresh);
      localStorage.setItem('loginTimestamp', Date.now());

      navigate('/home');
      
    } catch (err) {
      console.error("Login error:", err);
    }
  }

  return(
<div className="relative w-full h-screen flex items-center justify-center bg-[#111827] overflow-hidden">
  {/* Full-page Neon Border Effect */}
  <div className="absolute inset-0 before:absolute before:inset-0 before:border-[3px] before:border-purple-500 before:rounded-3xl before:shadow-[0px_0px_30px_6px_rgba(168,85,247,0.7)] before:pointer-events-none"></div>

  {/* Login Form */}
  <div className="relative w-[450px] h-auto bg-[#111827] rounded-3xl p-8 border-[2px] border-white shadow-[0px_0px_10px_2px_rgba(255,255,255,0.5)] before:absolute before:inset-0 before:rounded-3xl before:border-[2px] before:border-purple-500 before:shadow-[0px_0px_20px_5px_rgba(168,85,247,0.7)] before:pointer-events-none">
    <h1 className="text-3xl font-bold text-center text-white mb-6">Login</h1>

    <div className="mb-4">
      <label className="text-lg font-bold text-white block mb-2">Email:</label>
      <input
        onChange={(e) => setEmail(e.target.value)}
        type="text"
        className="w-full px-4 py-2 border border-gray-600 rounded-lg bg-gray-800 text-white focus:ring-2 focus:ring-orange-500 outline-none"
        placeholder="Enter your email"
      />
    </div>

    <div className="mb-4">
      <label className="text-lg font-bold text-white block mb-2">Password:</label>
      <input
        onChange={(e) => setPassword(e.target.value)}
        type="password"
        className="w-full px-4 py-2 border border-gray-600 rounded-lg bg-gray-800 text-white focus:ring-2 focus:ring-orange-500 outline-none"
        placeholder="Enter your password"
      />
    </div>

    <button
      onClick={abc}
      className="w-full text-xl bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded-lg transition duration-300"
    >
      Login
    </button>

    <div className="flex justify-between items-center mt-12">
      <Link to="/registration">
        <button className="text-white underline">Register</button>
      </Link>
      <Link to="/forgetpassword">
        <h4 className="text-gray-400 hover:text-white transition duration-300 underline">
          Forgot Password?
        </h4>
      </Link>
    </div>
  </div>
</div>


  );
}

export default Login;

      