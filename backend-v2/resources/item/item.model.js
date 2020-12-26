const mongoose = require("mongoose");

const ItemSchema = new mongoose.Schema({
  // basic item info
  name: { type: String, trim: true, required: true },
  description: { type: String, required: false },
  category: {
    type: String,
    required: [true, "Item category is required"],
    enum: ["Vegetable", "Fruit"],
    index: true
  },

  // nutrition info
  nutrition: {
    carbohydrates: { type: Number, min: 0 },
    protein: { type: Number, min: 0 },
    fat: { type: Number, min: 0 },
    sugar: { type: Number, min: 0 },
    calories: { type: Number, min: 0 },
  },
});

module.exports = mongoose.model("Item", ItemSchema);
