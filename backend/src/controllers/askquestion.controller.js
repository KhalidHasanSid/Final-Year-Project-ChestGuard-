import apiResponse from "../utils/apiResponse.js";
import { apiError } from "../utils/apiError.js";
import asyncHandler from "../utils/asyncHandler.js ";
import User from "../models/user.model.js";
import AskQuestion from "../models/questions.model.js";

const askQuestionController = asyncHandler(async(req,res,next)=>{

    const {age,city,problem,description}=req.body
    console.log(age,"ugyufyutfct")

    if(!age||!city||!problem||!description) {throw new apiError(401,"missing any value")}

    const user= req.user

    console.log("..........p",user)

   



   const new_queston= await AskQuestion.create({age:age,city:city, Problem_title:problem,Description:description,user:user._id})
   res.json({"success":"ok"})



   


})


const getQuetionsAsked= asyncHandler(async(req,res)=>{

  const data=await AskQuestion.find().lean()
  if (data.length === 0){
    throw new apiError(404, "No data found ")}

    console.log(data)


return res.status(201).json(
    new apiResponse(200, data, "data found")
)

})



export { askQuestionController,getQuetionsAsked}