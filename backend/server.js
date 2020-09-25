import express from "express";
import cors from "cors";

const app = express();
const json = express;
app.use(cors());

app.get("/", (req,res) => {

    res.send("<h1>Hello Express</h1>");
});

//Giving Port No. 5000 for our local server to execute
app.listen("5000",() => {

    console.log("Server Started on Port 5000");
});