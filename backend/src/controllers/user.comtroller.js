import apiResponse from "../utils/apiResponse.js";
import { apiError } from "../utils/apiError.js";
import asyncHandler from "../utils/asyncHandler.js ";
import User from "../models/user.model.js";






  const registerController=  asyncHandler( async(req, res ,next )=>{
    const  {fullname ,email, password }=req.body
    if(!fullname || !email || !password)  { throw new apiError(400,"you miss a variable")}

    console.log("hi",fullname,email,password);


      const existuser = await User.findOne({email})

      console.log("about this user ",existuser)
      if(existuser){ { 
        console.log("]]]]]]]]]]]]]]]]]]]",existuser.fullname)
        throw new apiError(400,"user already exist")}}

      const newUser= await  User.create({
        name:fullname,
        email:email,
        password:password

      })
      console.log("------------------------------------------------------")
       console.log(newUser)
       

       const chk_newUser= await User.findById(newUser._id).select("-password -refreshtoken")
       if(!chk_newUser){throw new apiError(409,"something went wrong while registration")}




  
     res.json(new apiResponse(200,chk_newUser,"successsfull"))


  })

   const loginUserController=asyncHandler( async(req,res,next)=>{

      const {email, password}=req.body

      console.log(email,"password",password)

      if(!email || !password){ throw new apiError(400, "something missing")}


      const user = await User.findOne({email})

      if(!user){ throw new apiError(400, "user does not in the database")}

      console.log(Boolean(user))

      let ok = false
      ok= await  user.validatePassword(password)
      console.log(Boolean(ok));

      if(!ok){ throw new apiError(400,"password is incorrect")}

      
        console.log("welcome you ate login ")
        const ACCESSTOKEN = await  user.generateAccessToken(user._id)
        const RefreshTOKEN = await  user.generateRefreshToken(user._id)
        console.log("accestoken",ACCESSTOKEN,"\nRefresh token",RefreshTOKEN)

        

        res.cookie("accessTokens",ACCESSTOKEN, {
          httpOnly: true,
          secure: false, sameSite: "lax"}).cookie("Refresh",RefreshTOKEN , {
            httpOnly: true,
            secure: false,  sameSite: "lax"}).json(new apiResponse(200,{
              access:ACCESSTOKEN,
              refresh: RefreshTOKEN
            }, "login succesful"))

      


   })


  export  {registerController, loginUserController}