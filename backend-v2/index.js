const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const morgan = require('morgan');
require("dotenv").config();

const itemRouter = require("./resources/item/item.route");
const userRouter = require("./resources/user/user.route");
const authRouter = require("./resources/auth/auth.route");

// set up express
const app = express();
app.use(express.json());
app.use(cors({ origin: "http://localhost:3000" }));
app.use(morgan("dev"));

const uri =
  "mongodb+srv://dbAdmin:lkYXgjB4kemszZU2@sabzicluster.knl8u.mongodb.net/DummyFox?retryWrites=true&w=majority";
mongoose.connect(uri, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
});

mongoose.connection.on("error", (err) => {
  console.log("error", err);
});

mongoose.connection.once("open", () => {
  console.log("Mongo is done");
});

app.use("/items", itemRouter);
app.use("/users", userRouter);
app.use("/api/", authRouter);


app.listen(5000, () => {
  console.log("Server is up");
});
