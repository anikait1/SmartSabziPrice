import { Schema, model } from "mongoose";

var ItemSchema = new Schema({
  name: String,
  price: String,
  image: String,
  description: String,

  nutrition: {
    carbohydrates: String,
    protein: String,
    fat: String,
    sugar: String,
    calories: String,
  },

  /*
  category: {
    type: String,
    enum: ["Vegetable", "Fruit"]
  }
  */

  category: [
    {
      id: 1,
      type: "fruits",
    },
    {
      id: 2,
      type: "vegetables",
    },
  ],

  comments: [
    {
      type: mongoose.Schema.Types.ObjectId,
      // reference from model Comments
      ref: "Comment",
    },
  ],
});

export default model("Item", ItemSchema);
