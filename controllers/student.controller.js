const Student = require('../models/student')

exports.createStudent = async(req, res) =>{
    console.log(req.body);
    const { firstName, lastName, email, password } = req.body;
    const newStudent = new Student({  firstName, lastName, email, password });
    const student = await newStudent.save();
    res.status(200).json(student);
}

exports.getStudents = async(req, res) =>{
    const students = await Student.find();
    res.status(200).json(students);
}

exports.getStudent = async(req, res) =>{
    const student = await Student.findById(req.params.id)
    res.status(200).json(student);
}

exports.updateStudent = async(req, res) =>{
    const updateStudent = await Student.findByIdAndUpdate(req.params.id, req.body, {new: true});
    res.status(200).json(updateStudent);
}

exports.deleteStudent = async(req, res) =>{
    await Student.findByIdAndDelete(req.params.id);
    res.status(204).json();
}