import { Schema, model } from "mongoose";

const LocationSchema = new Schema({
  lattitude: String,
  longitude: String,
  pincode: String,
  city: String,
  state: String,
});

export default model("Location", LocationSchema);
