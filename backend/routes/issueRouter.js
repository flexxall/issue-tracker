import express from "express";
import {
  getAllIssues,
  getUserIssues,
  createIssue,
  getIssueById,
  updateIssue,
  deleteIssue,
} from "../controllers/issueController.js";
import protect from "../middlewares/authMiddleware.js";
import Issue from "../models/issueModel.js";

const issueRouter = express.Router();

issueRouter.route("/").get(protect, getAllIssues);
issueRouter.route("/devIssues").get(protect, getUserIssues);
issueRouter.route("/create").post(protect, createIssue);
issueRouter
  .route("/:id")
  .get(getIssueById)
  .put(protect, updateIssue)
  .delete(protect, deleteIssue);
/* (req, res, next) => {
  Issue.find({})
    .then(
      (issue) => {
        res.statusCode = 200;
        res.setHeader("Content-Type", "application/json");
        res.json(issue);
      },
      (err) => next(err)
    )
    .catch((err) => next(err));
}; */
/* issueRouter.route("/create").post((req, res) => {
  const description = req.body.description;
  const forDev = req.body.forDev;
  const priority = req.body.priority;
  const newIssue = new Issue({
    description,
    forDev,
    priority,
  });
  newIssue.save();
}); */
//issueRouter.route("/:id").get().put().delete();
//.post(addIssue)
//.put
//.delete
// express router method to create route for getting users by id
//issueRouter.route('/:id').get(getIssuesById)

/* issueRouter
  .route("/issues")

  .post((req, res) => {
    const description = req.body.description;
    const forDev = req.body.forDev;
    const priority = req.body.priority;
    const newIssue = new Issue({
      description,
      forDev,
      priority,
    });
    newIssue.save();
  }); */
//.put
//.delete
export default issueRouter;
