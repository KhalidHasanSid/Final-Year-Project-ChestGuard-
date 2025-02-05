import { Router } from "express";
import { registerController ,loginUserController,logoutController} from "../controllers/user.comtroller.js";
import auth from "../middlewares/auth.middleware.js";


const userRouter= Router()


userRouter.route("/registerFYP").post(registerController)
userRouter.route("/loginFYP").post(loginUserController)
userRouter.route("/logOutFYP").post(auth, logoutController)




export default userRouter














