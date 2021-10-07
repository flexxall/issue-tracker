import { getIssues, getIssuesById, addIssue } from "../controllers/issueController.js"
import express from 'express'
const issueRouter = express.Router()


// express router method to create route for getting all users
issueRouter.route('/')
.get(getIssues)
.post(addIssue)

// express router method to create route for getting users by id
issueRouter.route('/:id').get(getIssuesById)

export default issueRouter