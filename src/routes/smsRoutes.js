import { Router } from "express";
import { sendAllSMS } from "../controllers/smsController.js";

let smsRouter = Router();
smsRouter.get('/send/sms', sendAllSMS);

export default smsRouter;