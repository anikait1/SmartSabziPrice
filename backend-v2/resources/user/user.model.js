const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
  {
    firstName: { type: String, trim: true, required: true },
    lastName: { type: String, trim: true, required: true },
    
    email: {
      type: String,
      trim: true,
      required: true,
      unique: true,
      lowercase: true,
    },

    likedPosts: [{ type: mongoose.Schema.Types.ObjectId, ref: "PricePost" }],
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("User", UserSchema);
