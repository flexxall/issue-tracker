import asyncHandler from "express-async-handler";
import Issue from "../models/issueModel.js";

const getAllIssues = asyncHandler(async (req, res) => {
  const issues = await Issue.find({});
  res.json(issues);
});

const createIssue = asyncHandler(async (req, res) => {
  const { description, forDev, priority } = req.body;

  if (!description || !forDev || !priority) {
    res.status(400);
    throw new Error("Please Fill All Fields");
  } else {
    const issue = new Issue({
      user: req.user._id,
      description,
      forDev,
      priority,
    });
    const createdIssue = await issue.save();
    res.status(201).json(createdIssue);
  }
});

const getIssueById = asyncHandler(async (req, res) => {
  const issue = await Issue.findById(req.params.id);

  if (issue) {
    return res.json(issue);
  } else {
    res.status(404).json({ message: "Issue id does not exist" });
  }
  return res.json(issue);
});

const updateIssue = asyncHandler(async (req, res) => {
  const { description, forDev, priority, isCompleted } = req.body;
  const issue = await Issue.findById(req.params.id);

  if (issue.user.toString() !== req.user._id.toString()) {
    res.status(401);
    throw new Error("You are not authorized to performe this action.");
  }

  if (issue) {
    issue.description = description;
    issue.forDev = forDev;
    issue.priority = priority;
    issue.isCompleted = isCompleted;

    const updatedIssue = await issue.save();
    res.json(updatedIssue);
  } else {
    res.status(404);
    throw new Error("Issue not found");
  }
});

const deleteIssue = asyncHandler(async (req, res) => {
  const issue = await Issue.findById(req.params.id);

  if (issue.user.toString() !== req.user._id.toString()) {
    res.status(401);
    throw new Error("You are not authorized to performe this action.");
  }

  if (issue) {
    await issue.remove();
    res.json({ message: "Issue Removed" });
  } else {
    res.status(401);
    throw new Error("Issue not found");
  }
});

export { getAllIssues, createIssue, getIssueById, updateIssue, deleteIssue };
