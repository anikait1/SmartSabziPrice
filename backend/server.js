const express  = require('express');
const cors     = require('cors');

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req,res) => {

    res.send("<h1>Hello Express File</h1>");
});

//Giving Port No. 5000 for our local server to execute
app.listen("5000",() => {

    console.log("Server Started on Port 5000");
});