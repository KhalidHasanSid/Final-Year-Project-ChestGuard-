import { Router } from "express";
import askQuestionController from "../controllers/askquestion.controller.js";

const askQuestionRouter= Router();

askQuestionRouter.route("/askQuestionFYP").post(askQuestionController)

export default askQuestionRouter