import App from "./App.js";
import { connectDB } from "./db/db.js";
import dotenv from 'dotenv'

dotenv.config({path:'./.env'})



connectDB().then(()=>{
    App.listen( process.env.PORT ||3800,()=>{
         console.log(`port is listening at ${process.env.PORT}`)
    })
 })
 .catch((err)=>{
    console.log("error occur while connecting to",err)
 })

