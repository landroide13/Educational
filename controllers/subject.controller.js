const Subject = require('../models/subject')

exports.createSubject = async(req, res) =>{
    console.log(req.body);
    const { name, description, tutor, term, articles } = req.body;
    const newSubject = new Subject({  name, description, tutor, term, articles });
    const subject = await newSubject.save();
    res.status(200).json(subject);
}

exports.getSubjects = async(req, res) =>{
    const subject = await Subject.find();
    res.status(200).json(subject);
}

exports.getSubject = async(req, res) =>{
    const subject = await Subject.findById(req.params.id)
    res.status(200).json(subject);
}

exports.updateSubject = async(req, res) =>{
    const updateSubject = await Subject.findByIdAndUpdate(req.params.id, req.body, {new: true});
    res.status(200).json(updateSubject);
}

exports.deleteSubject = async(req, res) =>{
    await Subject.findByIdAndDelete(req.params.id);
    res.status(204).json();
}