import apiResponse from "../utils/apiResponse.js";
import { apiError } from "../utils/apiError.js";
import asyncHandler from "../utils/asyncHandler.js ";
import User from "../models/user.model.js";
import auth from "../middlewares/auth.middleware.js";
import transporter from "../utils/nodemailer.js";
//import { setEmail,getemail,popemail } from "../utils/saveCurrentEmail.js";



    //globalVariable 
    let  randomNumber =0


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

          if(!RefreshTOKEN){ throw new apiError(400,"no refresh token found ")}
           user.refresh_token=RefreshTOKEN
          await user.save({ validateBeforeSave: false })
        console.log("accestoken",ACCESSTOKEN,"\nRefresh token",RefreshTOKEN)

        

        res.cookie("accessTokens",ACCESSTOKEN, {
          httpOnly: true,
          secure: true, sameSite: "lax"}).cookie("Refresh",RefreshTOKEN , {
            httpOnly: true,
            secure: true,  sameSite: "lax"}).json(new apiResponse(200,{
              access:ACCESSTOKEN,
              refresh: RefreshTOKEN
            }, "login succesful"))

      


   })

   const logoutController= asyncHandler(async(req,res,next)=>{
    await User.findByIdAndUpdate(
      req.user._id,
      {
          $unset: {
            refresh_token: 1 // this removes the field from document
          }
      },
      {
          new: true
      }
  )

  const options = {
      httpOnly: true,
      secure: true
  }

  return res
  .status(200)
  .clearCookie("accessTokens", options)
  .clearCookie("Refresh", options)
  .json(new apiResponse(200, {}, "User logged Out"))
       
   })


   const sendCode = asyncHandler( async (req, res)=>{
    const {email}=req.body

    if(!email){

    throw new apiError(400,"hahahahahaahhah")}
   console.log("check kro..............",email)


    randomNumber = Math.floor(Math.random() * (9999 - 1000 + 1)) + 1000;


    const mailData = {
      from: 'khalidhassan.kh705@gmail.com',  // sender address
        to: email,   // list of receivers
        subject: 'Sending Email using Node.js',
        text: `That was easy ${randomNumber}`,
        html: `<b>Hey there! </b> ${randomNumber}`
               
      };
       transporter.sendMail(mailData, function (err, info) {
        if(err)
         { console.log("////////////////////////////")
          console.log(err)
          throw new apiError(400,"hahahahahaahhah")}
        //  res.json (new apiResponse(400,email,"email  not send "))}
        else
          console.log(info);
        res.json (new apiResponse(200,email,"email send "))
     });
   })


    const checkOTP =asyncHandler(async(req,res)=>{
      const {email,code}= req.body

      console.log(code,"===",randomNumber)
      if(code==randomNumber)

        res.json( new apiResponse(200,code,"now you can set your password"))
      else res.json (new apiResponse(400,email,"email  not send "))}
    
      
    )

    const updatePassword =asyncHandler(async (req,res)=>{

      const {email ,newpassword}=req.body
      console.log(email,"lbvhilsuvhiwbvjvfgihovwbdvhidwb",newpassword)

      if(!email || !newpassword){throw new apiError(401,"something missing ")}

      const user = await User.findOne({email})  

      if(!user){throw new apiError(409,"user doesnot exist")}

      user.password = newpassword
      await user.save({validateBeforeSave: false})  
       res.json(new apiResponse(200, {}, "Password changed successfully"))
    })

    const authchecker =asyncHandler((req,res)=>{
      console.log("auth is working fine ")
    })
    
    


  export  {registerController, loginUserController,logoutController , sendCode, checkOTP,updatePassword ,authchecker }