import express from "express";
import validateBody from "../../decorators/validateBody.js";
import {
  userSigninSchema,
  userSignupSchema,
  verificationSchema,
} from "../../models/users.js";
import authController from "../../controllers/auth-controller.js";
import authenticate from "../../middlewars/authenticate.js";
import upload from "../../middlewars/upload.js";

const authRouter = express.Router();

authRouter.post(
  "/register",
  validateBody(userSignupSchema),
  authController.registration
);

authRouter.post("/login", validateBody(userSigninSchema), authController.login);

authRouter.get("/current", authenticate, authController.getCurrent);

authRouter.post("/logout", authenticate, authController.logout);

authRouter.patch(
  "/avatars",
  authenticate,
  upload.single("avatar"),
  authController.updateAvatar
);
authRouter.get("/verify/:verificationToken", authController.verification);

authRouter.post(
  "/verify",
  validateBody(verificationSchema),
  authController.resendVerification
);

export default authRouter;
