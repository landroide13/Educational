const Term = require('../models/term')

exports.createTerm = async(req, res) =>{
    console.log(req.body);
    const { name, subjects } = req.body;
    const newTerm = new Term({  name, subjects });
    const term = await newTerm.save();
    res.status(200).json(term);
}

exports.getTerms = async(req, res) =>{
    const terms = await Term.find();
    res.status(200).json(terms);
}

exports.getTerm = async(req, res) =>{
    const term = await Term.findById(req.params.id)
    res.status(200).json(term);
}

// exports.updateStudent = async(req, res) =>{
//     const updateStudent = await Student.findByIdAndUpdate(req.params.id, req.body, {new: true});
//     res.status(200).json(updateStudent);
// }

exports.deleteTerm = async(req, res) =>{
    await Term.findByIdAndDelete(req.params.id);
    res.status(204).json();
}