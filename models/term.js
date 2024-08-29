const mongoose = require('mongoose');
const { Schema } = require('mongoose');

const termSchema = new mongoose.Schema({
    name: {
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

const Term = mongoose.model('Role', termSchema)

module.exports = Term;