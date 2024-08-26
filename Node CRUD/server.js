const express = require("express");
const { default: mongoose } = require("mongoose");
const mangoose = require("mongoose");


const app = express();
const port = 3000;

app.use(express.json());
app.use(express.urlencoded({extended:true}));

const mongoURL = "mongodb://localhost:27017/crud";
mongoose.connect(mongoURL)
.then(()=>{
    console.log("Connected to MongoDB");
})
.catch((err)=>{
    console.log(`Error connected to mongoDB ${err}`);
});

const userRoutes = require("./routers/user");
app.use("/users", userRoutes)

app.listen(port, (req, res)=>{
    console.log(`Server is runnig on port ${port}`);

});