import express from 'express';
import cookieParser from "cookie-parser" 
import cors from "cors"
import bodyParser from "body-parser"


const App= express()

App.use(
    cors({
      origin: 'http://localhost:5173', 
      credentials: true 
    })
  );

App.use(bodyParser.json())

App.use(express.urlencoded({limit:'16kb',extended:true}))

App.use(cookieParser())

import userRouter from './routes/user.route.js';

App.use("/api/v1/chestguarduser",userRouter)

export default App
