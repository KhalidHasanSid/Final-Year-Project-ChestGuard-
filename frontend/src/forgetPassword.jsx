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

            if (response.data.statusCode === 200) {
                
               setFlag(3)
            }
            else if (response.data.statusCode === 400) {
                console.log("incorrect otp")
            }
        } catch (err) {
            console.log("incorrect otp")
            console.error("Login error:", err);
        }
    };

    return (
        <>
            <label>Email:</label>
            <input type="text" onChange={(e) => setEmail(e.target.value)} />

            <button onClick={sendCode}>Send Code</button>

            {flag === 1 && <p>Code sent</p>}
            {flag === 2 && <p>Not sent</p>}

            {flag === 1 && (
                <>
                    <label>Enter passcode:</label>
                    <input
                        type="text"
                        onChange={(e) => setCode(e.target.value)}
                        onKeyDown={(e) => {
                            if (e.key === "Enter") handlerFunction();
                        }}
                    />
                </>
            )}

            {flag===3 && (<> <SetNewPassword/></> )}
        </>
    );
}