// Serving JSON Data
const express = require("express");
const colors = require("colors");
const dotenv = require("dotenv").config;
const morgan = require("morgan");
const userdata =  require("./utility/userdata.json");
const path = require("path");
const fileURLToPath = require("url");

const app = express();
const PORT = process.env.PORT||5000;

app.get("/", (req, res)=>{
    res.send(userdata);

});

app.listen(PORT,()=>
    console.log(`Server running on port number ${PORT}`.green.bold)

);
