const express = require("express");
const colors = require("colors");
const dotenv = require("dotenv").config;
const morgan = require("morgan");
const fileUrlToPath = require("url");
const path = require("path");

const app = express();
const PORT = process.env.PORT||5000;

app.use(express.static(path.resolve(__dirname, "./public")));

app.get("/", (req, res)=>{
    res.sendFile(path.resolve(__dirname,"./public", "counter.html"));
});

app.listen(PORT, ()=>{
    console.log(`Server running on port ${PORT}`.bgGreen.black);
});
