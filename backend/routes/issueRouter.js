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
//import Issue from "../models/issueModel.js";

const issueRouter = express.Router();

issueRouter.route("/").get(protect, getAllIssues);
issueRouter.route("/myIssues").get(protect, getUserIssues);
issueRouter.route("/create").post(protect, createIssue);
issueRouter
  .route("/:id")
  .get(getIssueById)
  .put(protect, updateIssue)
  .delete(protect, deleteIssue);

export default issueRouter;
