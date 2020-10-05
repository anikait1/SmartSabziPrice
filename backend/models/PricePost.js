import mongoose from "mongoose";

const PricePostSchema = new mongoose.Schema(
  {
    itemBill: {
      price: { type: Number, required: true },
      rating: { type: Number, min: 0, max: 5, required: false },
      quantity: { type: Number, required: true },
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

    // user and item details
    userId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    itemId: { type: mongoose.Schema.Types.ObjectId, ref: "Item" },
  },
  { timestamps: true }
);

export default mongoose.model("PricePost", PricePostSchema);
