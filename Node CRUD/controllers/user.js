const User = require('../models/user');

exports.createUser = async(req, res)=>{
    console.log(`Hii User`,);
    data = req.body;
    const {email} = req.body;
    const existingUser = await User.findOne({email});
    // console.log(`my data`, data );
    console.log(`my existingUser`, existingUser );
    if(existingUser){
        return res.status(400).json({message:"User already exsits"})
    }
    const user = new User(data)
    await user.save();
    res.status(201).json(user)
}

exports.getAllUsers = async(req, res)=>{
    const user = await User.find();
    res.status(201).json(user)
}