import mongoose from "mongoose";

const Schema = mongoose.Schema;

const issueSchema = new Schema(
  {
    description: {
      type: String,
      required: true,
    },
    forDev: {
      type: String,
      required: true,
    },
    priority: {
      type: String,
      required: true,
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      require: true,
      ref: "User",
    },
    isCompleted: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

const Issue = mongoose.model("Issue", issueSchema);

export default Issue;
