import mongoose from "mongoose";

const PricePostSchema = new mongoose.Schema(
  {
    itemBill: {
      price: { type: Number, required: true },
      rating: { type: Number, min: 0, max: 5, required: false },
      quantity: { value: Number, required: true },
      quantityType: { type: String, enum: ["Dozen", "Gram", "Kilogram"] },
    },

    votes: { type: Number, default: 0 },

    location: {
      position: {
        // mongoose GeoJson
        type: { type: String, enum: ["Point"], required: true },
        coordinates: { type: [Number], required: true }, // [longitude, latitude]
      },
      pincode: { type: String, required: false },
      city: { type: String, required: true },
      state: { type: String, required: true },
    },

    author: {
      id: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
      username: String,
    },
  },
  { timestamps: true }
);

export default mongoose.model("PricePost", PricePostSchema);
