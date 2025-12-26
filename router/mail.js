import { Router } from "express";
import mailController from "../controller/mail.js";

const mailRouter = Router();

// ❗ այստեղ /send-email ՉԻ ԳՐՎՈՒՄ
mailRouter.post('/', mailController.sendEmail);

export default mailRouter;