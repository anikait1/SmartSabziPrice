import { Schema, model } from "mongoose";

const ItemSchema = new Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },

  imageUrl: {
    type: String,
    required: true,
  },

  description: {
    type: String,
    required: false,
  },

  // add detailed validation for this
  nutrition: {
    carbohydrates: Number,
    protein: Number,
    fat: Number,
    sugar: Number,
    calories: Number,
  },

  category: {
    type: String,
    required: true,
    enum: ["Vegetable", "Fruit"],
  },

  comments: [
    {
      type: mongoose.Schema.Types.ObjectId,
      // reference from model Comments
      ref: "Comment",
    },
  ],
});

export default model("Item", ItemSchema);
