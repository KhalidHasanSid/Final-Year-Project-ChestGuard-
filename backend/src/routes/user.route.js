import { Router } from "express";
import { registerController ,loginUserController,logoutController} from "../controllers/user.comtroller.js";
import auth from "../middlewares/auth.middleware.js";
import { sendCode,checkOTP, updatePassword ,authchecker} from "../controllers/user.comtroller.js";


const userRouter= Router()


userRouter.route("/registerFYP").post(registerController)
userRouter.route("/loginFYP").post(loginUserController)  
userRouter.route("/auth").post(auth,authchecker)  

userRouter.route("/logOutFYP").post(auth, logoutController)
userRouter.route("/sendcode").post(sendCode)  
userRouter.route("/checkOTP").post(checkOTP)
userRouter.route("/setPassword").post(updatePassword)






export default userRouter














