const User = require("../models/user");

exports.verifyDuplicatedUser = async(req, res, next) =>{
    
    const user = await User.findOne({ username: req.body.email });
    if(user) return res.status(200).json({ message: "User already exist "});

    const email = await User.findOne({ email: req.body.email });
    if(email) return res.status(200).json({ message: "User already exist "});

    next();
}



