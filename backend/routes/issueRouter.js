import express from 'express'
import Issue from '../models/issueModel.js'

const issueRouter = express.Router()

issueRouter.use(express.json());

// express router method to create route for getting all users
issueRouter.route('/')
  .get((req, res, next) => {
    Issue.find({})
    .then((issue) => {
      res.statusCode = 200;
      res.setHeader('Content-Type', 'application/json');
      res.json(issue);
    }, (err) => next(err))
    .catch((err) => next(err));		
  });
//.post(addIssue)

// express router method to create route for getting users by id
//issueRouter.route('/:id').get(getIssuesById)

issueRouter.route('/createIssue')
  .post((req, res) => {
    const description = req.body.description
    const forDev = req.body.forDev
    const priority = req.body.priority
    const newIssue = new Issue({
      description,
      forDev,
      priority
    })

    newIssue.save()
  })
export default issueRouter