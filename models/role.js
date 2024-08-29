const mongoose = require('mongoose');
const { Schema } = require('mongoose');

const roleSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    users:[{
        type: Schema.Types.ObjectId,
        ref: 'User'
    }]
})

const Role = mongoose.model('Role', roleSchema)

module.exports = Role;