import express from 'express'
import Issue from '../models/issueModel.js'

const currentIssueRouter = express.Router()

// express router method to create route for getting all users
currentIssueRouter.route('/')
  .get((req, res, next) => {
    Issue.find({})
    .then((issue) => {
      res.statusCode = 200;
      res.setHeader('Content-Type', 'application/json');
      res.json(issue);
    }, (err) => next(err))
    .catch((err) => next(err));		
  });

export default currentIssueRouter