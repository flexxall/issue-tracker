import express from "express";
import { getUserIssues } from "../controllers/issueController.js";
import protect from "../middlewares/authMiddleware.js";

const myIssuesRouter = express.Router();

myIssuesRouter.route("/myIssues").get(protect, getUserIssues);

export default myIssuesRouter;
