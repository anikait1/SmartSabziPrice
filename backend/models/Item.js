import { Schema, model } from "mongoose";

const ItemSchema = new Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },

  displayImgUrl: {
    type: String,
    required: true,
  },

  mainImgUrl: {
    type: String,
    required: true,
  },

  description: {
    type: String,
    required: false,
  },

  nutrition: {
    carbohydrates: {
      type: Number,
      min: 0,
    },
    protein: {
      type: Number,
      min: 0,
    },
    fat: {
      type: Number,
      min: 0,
    },
    sugar: {
      type: Number,
      min: 0,
    },
    calories: {
      type: Number,
      min: 0,
    },
  },

  category: {
    type: String,
    required: true,
    enum: ["Vegetable", "Fruit"],
  },

  priceposts: [
    {
      type: mongoose.Schema.Types.ObjectId,
      // reference from model PricePost
      ref: "PricePost",
    },
  ],
});

export default model("Item", ItemSchema);
