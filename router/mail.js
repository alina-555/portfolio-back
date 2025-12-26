import { Router } from "express";
import mailController from "../controller/mail.js";

const mailRouter = Router();

mailRouter.post("/send-email",mailController.sendEmail)

export default mailRouter;