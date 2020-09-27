import { Schema, model } from "mongoose";

const PricePostSchema = new Schema(
  {
    itemBill: {
      price: {
        type: Number,
        required: true,
      },

      rating: {
        type: Number,
        min: 0,
        max: 5,
        required: false,
      },

      quantity: {
        value: Number,
        required: true,
      },

      quantityType: {
        type: String,
        enum: ["Dozen", "Gram", "Kilogram"],
      },
    },

    votes: {
      type: Number,
      min: 0,
    },

    // need to elaborate this
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
  },
  {
    timestamps: true,
  }
);

export default model("PricePost", PricePostSchema);
