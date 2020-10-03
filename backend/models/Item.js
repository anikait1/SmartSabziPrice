import mongoose from "mongoose";

const ItemSchema = new mongoose.Schema({
  // basic item info
  name: { type: String, required: true, trim: true },
  description: { type: String, required: false },
  category: { type: String, required: true, enum: ["Vegetable", "Fruit"] },

  // image urls
  displayImgUrl: { type: String, required: true },
  mainImgUrl: { type: String, required: true },

  // nutrition info
  nutrition: {
    carbohydrates: { type: Number, min: 0 },
    protein: { type: Number, min: 0 },
    fat: { type: Number, min: 0 },
    sugar: { type: Number, min: 0 },
    calories: { type: Number, min: 0 },
  },

  // all item related price posts(stores reference)
  pricePosts: [{ type: mongoose.Schema.Types.ObjectId, ref: "PricePost" }],
});

export default mongoose.model("Item", ItemSchema);
