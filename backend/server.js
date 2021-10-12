import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./config/connectDB.js";
import issueRouter from "./routes/issueRouter.js";
import userRouter from "./routes/userRouter.js";
import { notFound, errorHandler } from "./middlewares/errorMiddleware.js";

const app = express();

app.use(cors());
app.use(express.json());

dotenv.config();
//connect database
connectDB();

//require route
//app.use("/");
app.use("/issues", issueRouter);
//app.use("/api/issues", issueRouter);

//Creating API for user
app.use("/api/users", userRouter);

app.use(notFound);
app.use(errorHandler);

const PORT = process.env.PORT || 5000;

//Express js listen method to run project on http://localhost:5000
app.listen(PORT, console.log(`App is running on port ${PORT}`));
