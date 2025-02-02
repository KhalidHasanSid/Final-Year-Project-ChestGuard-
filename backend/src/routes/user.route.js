import { Router } from "express";
import { registerController ,loginUserController} from "../controllers/user.comtroller.js";


const userRouter= Router()


userRouter.route("/registerFYP").post(registerController)
userRouter.route("/loginFYP").post(loginUserController)




export default userRouter














