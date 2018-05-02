const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const commentSchema = require('./comment.js');

const postSchema = new Schema({
    title: {type: String, required: true},
    content: {type: String, required: true},
    upvotes: {
        type: Number,
        default: 0,
    },
    downvotes: {
        type: Number,
        default: 0,
    },
    comments: [ commentSchema ]
}, {
    timestamps: true
});

module.exports = mongoose.model('Post', postSchema);