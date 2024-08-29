const Student = require("../models/user");

exports.verifyDuplicatedStudent = async(req, res, next) =>{

    const email = await Student.findOne({ email: req.body.email });
    if(email) return res.status(200).json({ message: "Student already exist "});

    next();
}