import Issue from '../models/issuesModel.js'
import asyncHandler from 'express-async-handler'

//getIssues function to get all issues
export const getIssues = asyncHandler(async(req, res) => {
    const issues = await Issue.find({})
    if (err) {
      console.log(err)
    } else {
      res.json(issues)
    }    
})

//getIssueById function to retrieve issue by id
export const getIssueById  = asyncHandler(async(req, res) => {
    const issue = await Issue.findById(req.params.id)

    //if issue id match param id send issue else throw error
    if(issue){
        res.json(issue)
    }else{
        res.status(404).json({message: "Issue not found"})
        res.status(404)
        throw new Error('Issue not found')
    }
})

//addIssue function to add new issues
export const addIssue = asyncHandler(async(req, res) => {
  if (req.body != null) {
    //req.body.author = req.user._id;
    Issues.create(req.body)
    .then((issue) => {
      console.log('Issue Added ', issue)
      //Issues.findById(issue._id)
      //.populate('author')
      //.then((issue) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(issue);
      //})
    }, (err) => next(err))
    .catch((err) => next(err));
  }
  else {
    err = new Error('Issue not found in request body');
    err.status = 404;
    return next(err);
  }    
})