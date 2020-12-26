const mongoose = require("mongoose");

const PricePostSchema = new mongoose.Schema(
  {
    bill: {
      price: { type: Number, required: true },
      quantity: { type: Number, required: true },
      quantityType: {
        type: String,
        enum: ["Dozen", "Gram", "Kilogram"],
        required: true,
      },
    },

    likes: [
      { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    ],

    // mongoose GeoJson
    position: {
      type: { type: String, enum: ["Point"], required: true },
      coordinates: { type: [Number], required: true }, // [longitude, latitude]
    },

    // location info fetched from HERE Maps API
    location: {
      title: { type: String, required: true },
      pincode: { type: String, required: false },
      city: { type: String, required: true },
      state: { type: String, required: true },
      country: { type: String, required: true },
    },

    // user and item details
    userID: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      index: true,
      required: true,
    },
    itemID: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Item",
      index: true,
      required: true,
    },
  },
  { timestamps: true }
);

PricePostSchema.index({ position: "2dsphere" });

module.exports = mongoose.model("PricePost", PricePostSchema);
