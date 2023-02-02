import express from "express";
import {
  registerUser,
  authUser,
  updateUserProfile,
} from "../controllers/userController.js";
import protect from "../middlewares/authMiddleware.js";

const userRouter = express.Router();

userRouter.route("/").post(registerUser);
userRouter.route("/login").post(authUser);
userRouter.route("/profile").post(protect, updateUserProfile);

export default userRouter;
