import { Schema, model } from "mongoose";

var CommentSchema = new Schema({
  itemBill: {
    price: {
      type: String,
      required: true,
    },
    rating: String,
    quantity: {
      value: String,
      required: true,
    },

    quantityType: {
      type: String,
      enum: ["Dozen", "Gram", "Kilogram"],
    },
  },
  votes: String,
  location: {
    lattitude: String,
    longitude: String,
    pincode: String,
    city: String,
    state: String,
  },

  author: {
    id: {
      type: mongoose.Schema.Types.ObjectId,
      //refernce via model User
      ref: "User",
    },
    username: String,
  },
});

export default model("Comment", CommentSchema);
