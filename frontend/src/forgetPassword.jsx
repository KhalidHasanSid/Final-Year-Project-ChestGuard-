import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import SetNewPassword from './setNewPassword.jsx';

export default function ForgetPassword() {
    const [code, setCode] = useState("");
    const [email, setEmail] = useState("");
    const [flag, setFlag] = useState(0); // <-- Use state instead of variable
    const navigate = useNavigate();

    const sendCode = async () => {
        try {
            const response = await axios.post('http://localhost:4500/api/v1/chestguarduser/sendcode', {
                email: email 
            }, { withCredentials: true });

            console.log(response.data.statusCode);

            if (response.data.statusCode === 200) {
                setFlag(1);  // <-- Update state, triggering a re-render
            } else {
                setFlag(2);
            }
        } catch (err) {
            setFlag(2);
            console.error("Login error:", err);
        }
    };

    const handlerFunction = async () => {  
        try {

            console.log(email,"===",code)
            const response = await axios.post('http://localhost:4500/api/v1/chestguarduser/checkOTP', {
                email: email,
                code: code 
            }, { withCredentials: true });
            console.log(">>>>",response.data.statusCode)

            if (response.data.statusCode == 200) {

                console.log("i am here new flag value is going to 3")
                
               setFlag(3)
            }
            else if (response.data.statusCode == 400) {
                console.log("incorrect otp")
            }
        } catch (err) {
            console.log("incorrect otp")
            console.error("Login error:", err);
        }
    };

    return (
      <div className="relative w-full h-screen flex items-center justify-center bg-[#111827] overflow-hidden">
      {/* Full-page Neon Border Effect */}
      <div className="absolute inset-0 before:absolute before:inset-0 before:border-[3px] before:border-purple-500 before:rounded-3xl before:shadow-[0px_0px_30px_6px_rgba(168,85,247,0.7)] before:pointer-events-none"></div>
    
      {/* Reset Password Card */}
      <div className="relative w-[400px] bg-gray-900 rounded-3xl p-6 border-[2px] border-white shadow-[0px_0px_10px_2px_rgba(255,255,255,0.5)] before:absolute before:inset-0 before:rounded-3xl before:border-[2px] before:border-purple-500 before:shadow-[0px_0px_20px_5px_rgba(168,85,247,0.7)] before:pointer-events-none">
        <h1 className="text-2xl font-bold text-center text-white mb-4">Reset Password</h1>
    
        <div className="mb-4">
          <label className="text-lg font-bold text-white block mb-2">Email:</label>
          <input
            type="text"
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-4 py-2 border border-gray-600 rounded-lg bg-gray-800 text-white focus:ring-2 focus:ring-orange-500 outline-none"
            placeholder="Enter your email"
          />
        </div>
    
        <button
          onClick={sendCode}
          className="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded-lg transition duration-300"
        >
          Send Code
        </button>
    
        {flag === 1 && <p className="text-green-500 mt-4 text-center">Code sent successfully!</p>}
        {flag === 2 && <p className="text-red-500 mt-4 text-center">Failed to send code. Try again.</p>}
    
        {flag === 1 && (
          <div className="mt-4">
            <label className="text-lg font-bold text-white block mb-2">Enter Passcode:</label>
            <input
              type="text"
              onChange={(e) => setCode(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") handlerFunction();
              }}
              className="w-full px-4 py-2 border border-gray-600 rounded-lg bg-gray-800 text-white focus:ring-2 focus:ring-orange-500 outline-none"
              placeholder="Enter code"
            />
          </div>
        )}
    
        {flag === 3 && (
          <div className="mt-6">
            <SetNewPassword value={email} />
          </div>
        )}
      </div>
    </div>
    
    );
}