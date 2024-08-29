const User = require('../models/user')

exports.createUser = async(req, res) =>{
    console.log(req.body);
    const { email, firstName, lastName, role, password } = req.body;
    const newUser = new User({ email, firstName, lastName, role, password });
    const user = await newUser.save();
    res.status(200).json(user);
}

exports.getUsers = async(req, res) =>{
    const users = await User.find();
    res.status(200).json(users);
}

exports.getUser = async(req, res) =>{
    const user = await User.findById(req.params.id)
    res.status(200).json(user);
}

exports.updateUser = async(req, res) =>{
    const updateUser = await User.findByIdAndUpdate(req.params.id, req.body, {new: true});
    res.status(200).json(updateUser);
}

exports.deleteUser = async(req, res) =>{
    await User.findByIdAndDelete(req.params.id);
    res.status(204).json();
}