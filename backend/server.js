import express from "express";
import cors from "cors";
import morgan from "morgan";
import mongoose from "mongoose";
import "dotenv/config.js";

// set up express
const app = express();
app.use(express.json());
// setup the middleware

if (process.env.NODE_ENV === "development") {
  //cors allows us deal with React without any Problem
  //Cross Origin resource sharing
  app.use(
    cors({
      origin: process.env.CLIENT_URL,
    })
  );

  app.use(morgan("dev"));

  // Morgan is a HTTP request logger middleware.
  // Give information about each request
  // Simplifies the process of logging requests.
}

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

//Load Routes
import itemRouter from "./routes/items.js";
import userRouter from "./routes/users.js";
import pricePostRouter from "./routes/pricePosts.js";
import authRouter from "./routes/auth.js";

// Use Routes
app.use("/items", itemRouter);
app.use("/pricePosts", pricePostRouter);
app.use("/users", userRouter);
app.use("/api/", authRouter);

// Development Server Port 5000
const port = process.env.PORT;

app.listen(port, () => {
  console.log(`Server Started on Port ${port}`);
});
