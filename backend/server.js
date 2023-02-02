import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./config/connectDB.js";
import userRouter from "./routes/userRouter.js";
import issueRouter from "./routes/issueRouter.js";
import { notFound, errorHandler } from "./middlewares/errorMiddleware.js";
import path from "path";

const app = express();

app.use(cors());
app.use(express.json());

dotenv.config();
connectDB();

app.use("/users", userRouter);
app.use("/issues", issueRouter);
app.use("/myIssues", issueRouter);

// -------------------- Deployement --------------------

const __dirname = path.resolve();

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "/frontend/build")));

  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "frontend", "build", "index.html"));
  });
} else {
  app.get("/", (req, res) => {
    res.send("API is running..");
  });
}

// -------------------- Deployement --------------------

app.use(notFound);
app.use(errorHandler);

const PORT = process.env.PORT || 5000;
app.listen(PORT, console.log(`App is running on port ${PORT}`));
