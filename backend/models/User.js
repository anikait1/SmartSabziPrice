import { Schema, model, Mongoose } from "mongoose";

const UserSchema = new Schema({
  // user info
  username: { type: String, required: true, trim: true },
  password: { type: String, required: true },
  dateOfBirth: { type: Date, required: true },

  postsByUser: [{ type: mongoose.Schema.Type.Objec, ref: "PricePost" }],
});

export default model("User", UserSchema);
