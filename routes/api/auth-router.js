import express from "express";
import validateBody from "../../decorators/validateBody.js";
import { userSigninSchema, userSignupSchema } from "../../models/users.js";
import authController from "../../controllers/auth-controller.js";
import authenticate from "../../middlewars/authenticate.js";

const authRouter = express.Router();

authRouter.post(
  "/register",
  validateBody(userSignupSchema),
  authController.registration
);

authRouter.post("/login", validateBody(userSigninSchema), authController.login);

authRouter.get("/current", authenticate, authController.getCurrent);

authRouter.post("/logout", authenticate, authController.logout);

export default authRouter;
