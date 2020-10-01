import { Schema, model, Mongoose } from "mongoose";

const UserSchema = new Schema({
  username: {
    type: String,
    required: true,
    trim: true,
  },

  password: {
    type: String,
    required: true,
  },

  age: {
    type: String,
    required: true,
  },

  postsbyUser : [
    {
      type : mongoose.Schema.Type.ObjectID,
      ref : "PricePost"
    },
  ],

});

export default model("User", UserSchema);
