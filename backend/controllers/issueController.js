import Issue from '../models/issuesModel.js'
import asyncHandler from 'express-async-handler'

//getIssues function to get all issues
export const getIssues = asyncHandler(async(req, res) => {
    const issues = await Issue.find({})
    res.json(issues)
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