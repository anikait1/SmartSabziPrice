import mongoose from "mongoose";

const PricePostSchema = new mongoose.Schema(
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
      default: 0,
    },

    location: {
      position: {
        type: {
          type: String,
          enum: ["Point"],
          required: true,
        },
        coordinates: {
          type: [Number], // [longitude, latitude]
          required: true,
        },
      },
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
  { timestamps: true }
);

export default mongoose.model("PricePost", PricePostSchema);
