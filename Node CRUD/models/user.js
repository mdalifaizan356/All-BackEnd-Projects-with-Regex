const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
    {
        name:{
            type:String,
            require:true
        },
        email:{
            type:String,
            require:true,
            unique:true
        },
    },
    {
        timestamps:true,
        versionKey:false    //It is use to remove __version in mongoDB database.
    },
);

module.exports = mongoose.model("User", userSchema)