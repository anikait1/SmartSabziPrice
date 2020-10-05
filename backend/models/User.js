import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  // user info
  username: { type: String, required: true, trim: true },
  password: { type: String, required: true },
  dateOfBirth: { type: Date, required: true },
});

export default mongoose.model("User", UserSchema);
