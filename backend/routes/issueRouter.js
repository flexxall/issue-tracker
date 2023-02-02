import express from "express";
import {
  getAllIssues,
  createIssue,
  getIssueById,
  updateIssue,
  deleteIssue,
} from "../controllers/issueController.js";
import protect from "../middlewares/authMiddleware.js";

const issueRouter = express.Router();

issueRouter.route("/").get(protect, getAllIssues);
issueRouter.route("/create").post(protect, createIssue);
issueRouter
  .route("/:id")
  .get(getIssueById)
  .put(protect, updateIssue)
  .delete(protect, deleteIssue);

export default issueRouter;
