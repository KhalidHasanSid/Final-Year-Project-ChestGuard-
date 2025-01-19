import express from 'express';
import cookieParser from "cookie-parser" 
import cors from "cors"
import bodyParser from "body-parser"


const App= express()
App.use(cors())

App.use(bodyParser.json())

App.use(express.urlencoded({limit:'16kb',extended:true}))

App.use(cookieParser())

export default App
