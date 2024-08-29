const mongoose = require('mongoose');
const { Schema } = require('mongoose');

const articleSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    text: {
        type: String,
        required: true
    },
    subject: {
        type: Schema.Types.ObjectId,
        ref: 'Subject'
    },
    term: {
        type: Schema.Types.ObjectId,
        ref: 'Term'
    }
})



const Article = mongoose.model('Article', articleSchema)

module.exports = Article;