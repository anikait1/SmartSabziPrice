import { Schema, model } from "mongoose";

var ItemSchema = new Schema({
  name: String,
  price: String,
  image: String,
  description: String,

  category: [
    {
      id: 1,
      type: "fruits",
      nutrition: {
        carbohydrates: String,
        protein: String,
        fat: String,
        sugar: String,
        calories: String,
      },
    },
    {
      id: 2,
      type: "vegetables",
      nutrition: {
        carbohydrates: String,
        protein: String,
        fat: String,
        sugar: String,
        calories: String,
      },
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
