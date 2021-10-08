import express from 'express'
import { registerUser, authUser } from '../controllers/userController.js'
const userRouter = express.Router()


// express router method to create route for getting all users
userRouter.route('/')
  .post(registerUser)

userRouter.route('/login')
  .post(authUser)

// express router method to create route for getting users by id
//userRouter.route('/:id').get(getUserById)

export default userRouter