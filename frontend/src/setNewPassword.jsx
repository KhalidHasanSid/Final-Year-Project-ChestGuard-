import React from 'react'
import axios from 'axios'


export default function SetNewPassword() {

    const [newPassword,setNewPassword]=React.useState()

    const handlesubmit = async () => {  
        try {
            const response = await axios.post('http://localhost:4500/api/v1/chestguarduser/setPassword', {
                password: password,
               
            }, { withCredentials: true });

            if (response.data.statusCode === 200) {
                navigate('/login');
            }
            else if (response.data.statusCode === 200) {
                console.log("incorrect otp")
            }
        } catch (err) {
            console.error("Login error:", err);
        }
    };
  return (<>
    <label >set new password:</label> 
    <input   type="password"  onChange={(e)=>setNewPassword(e.target.value)} />
    <button onClick={handlesubmit}>set</button>
    </>




    
  )
}
