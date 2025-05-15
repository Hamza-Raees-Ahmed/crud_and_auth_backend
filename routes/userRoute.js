import express from "express";
import { registerHandler,loginHandler,currentUserHandler } from "../controllers/userControllers.js";
import validateToken from "../middlewear/validateTokenHandler.js";
const router = express.Router();


// login and signup api routes

router.route("/user/register").post(registerHandler);
router.route("/user/login").post(loginHandler);
router.route("/user/current").get(validateToken,currentUserHandler);

export default router;