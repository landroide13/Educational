const Subject = require("../models/subject");

exports.verifyDuplicatedSubject = async(req, res, next) =>{

    const name = await Subject.findOne({ id: req.body.name });
    if(name) return res.status(200).json({ message: "Subject already exist "});

    next();
}