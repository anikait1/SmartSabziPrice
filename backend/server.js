import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import "dotenv/config.js";

import itemRoutes from "./routes/items.js";

// set up express
const app = express();
const port = process.env.PORT;

// setup the middleware
app.use(cors());
app.use(express.json());

// database connection
const uri = process.env.ATLAS_URI;
mongoose.connect(uri, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
});

const connection = mongoose.connection;
connection.once("open", () => {
  console.log("MongoDB database connection established successfully");
});

// routes
app.use("/items", itemRoutes);

// Giving Port No. 5000 for our local server to execute
app.listen(port, () => {
  console.log("Server Started on Port 5000");
});
