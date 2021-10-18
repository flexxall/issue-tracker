import mongoose from "mongoose";

const Schema = mongoose.Schema;

const myIssuesSchema = new Schema(
  {
    firstName: {
      type: String,
    },
    lastName: {
      type: String,
    },
    userName: {
      type: String,
      required: true,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    isDev: {
      type: Boolean,
      required: true,
      defualt: false,
    },
    isAdmin: {
      type: Boolean,
      required: true,
      defualt: false,
    },
  },
  {
    timestamps: true,
  }
);

userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) {
    next();
  }
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
});

userSchema.methods.matchPassword = async function (enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.password);
};

const MyIssuesSchema = mongoose.model("MyIssuesSchema", userSchema);

export default MyIssuesSchema;
