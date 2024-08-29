const mongoose = require('mongoose');
const { Schema } = require('mongoose');

const studentSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    email: {
        type: String
    },
    password: {
        type: String,
        required: true
    },
    subjects: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Subject'   
        }
    ],
})

studentSchema.statics.hashPassword = async (password) => {
    const salt = await bcrypt.genSalt(10);
    return await bcrypt.hash(password, salt);
}

studentSchema.statics.comparePassword = async (password, cadidatePassword) => {
    const isValid = await bcrypt.compare(password, cadidatePassword);
    return isValid;
}

const Student = mongoose.model('Student', studentSchema)

module.exports = Student;