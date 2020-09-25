import { Schema, model } from "mongoose";

var UserSchema = new Schema({
  username: {
    type: String,
    required: true,
    trim : true
  },
  password: {
    type: String,
    required: true,
  },
  age: {
    type: String,
    required: true,
  },
});

export default model("User", UserSchema);
