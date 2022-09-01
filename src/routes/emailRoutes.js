import { sendEmails } from "../controllers/emailController.js";
import { Router } from 'express';

let emailRouter = Router();
emailRouter.get('/send/emails', sendEmails);

export default emailRouter;