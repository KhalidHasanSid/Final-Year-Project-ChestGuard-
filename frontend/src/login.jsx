import react from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

function Login(){
  const [username ,setUsername]=react.useState("")
  const [password ,setPassword]=react.useState("")

  const handleSubmit =(e)=>{
    e.preventDefault();
    console.log("hi")
  }


  return(
    <>
    <label >Doctor ID:</label>
    <input  onChange={(e)=> setUsername(e.target.value)} type="text" />
    <label >Password:</label>
    <input onChange={(e)=> setPassword(e.target.value)} type="password" />
     <button onClick={handleSubmit} >Login</button>
    <Link to ="/registration"><button>Register</button></Link>
   
    </>
  )
}
export default Login