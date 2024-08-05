//Creating a Basic Server
const express = require("express");
const colors = require("colors");
const dotenv= require("dotenv").config;
const morgan = require("morgan");

const app=express();
const PORT = process.env.PORT||5000;

app.get("/",(req, res)=>{
    res.send("Hello World");
});

app.listen(PORT, ()=>
    console.log(`Server running on port number ${PORT}`.green.bold)
);