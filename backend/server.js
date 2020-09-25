import express from "express";
import cors from "cors";

import fruitRoutes from "./routes/fruits.js";
import vegetableRoutes from "./routes/vegetables.js";

const app = express();
app.use(cors());

/*
app.get("/", (req,res) => {

    res.send("<h1>Hello Express</h1>");
});
*/

app.use("/fruits", fruitRoutes);
app.use("/vegetables", vegetableRoutes);

//Giving Port No. 5000 for our local server to execute
app.listen("5000",() => {

    console.log("Server Started on Port 5000");
});