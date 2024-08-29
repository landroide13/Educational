const mongoose = require('mongoose');
const { Schema } = require('mongoose');

const subjectSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    tutor: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    term: {
        type: Schema.Types.ObjectId,
        ref: 'Term'
    },
    articles: [{
        type: Schema.Types.ObjectId,
        ref: 'Article'
    }],
    students:[
        {
            type: Schema.Types.ObjectId,
            ref: 'Student'
        }
    ]
})



const Subject = mongoose.model('Subject', subjectSchema)

module.exports = Subject;