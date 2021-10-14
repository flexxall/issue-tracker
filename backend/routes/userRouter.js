import express from "express";
import User from "../models/userModel.js";
import { registerUser, authUser } from "../controllers/userController.js";
const userRouter = express.Router();

// express router method to create route for getting all users
userRouter
  .route("/")
  .get((req, res, next) => {
    User.find({})
      .then(
        (user) => {
          res.statusCode = 200;
          res.setHeader("Content-Type", "application/json");
          res.json(user);
        },
        (err) => next(err)
      )
      .catch((err) => next(err));
  })

  .post(registerUser);

userRouter.route("/login").post(authUser);

// express router method to create route for getting users by id
//userRouter.route('/:id').get(getUserById)

export default userRouter;
