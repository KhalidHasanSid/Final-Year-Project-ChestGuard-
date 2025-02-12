import { adminRegisterController ,loginAdminController,approveQuestion,getapprovedQuestionController, deleteQuestion} from "../controllers/admin.controller.js";
import { Router } from "express";

import auth from "../middlewares/auth.middleware.js";

const adminRouter= Router();

adminRouter.route("/adminRegistration").post(adminRegisterController) 
adminRouter.route("/AdminloginFYP").post(loginAdminController)
adminRouter.route("/A").post(approveQuestion )
adminRouter.route("/B").get(getapprovedQuestionController)

adminRouter.route("/deletequestion").post(deleteQuestion)






export default  adminRouter
