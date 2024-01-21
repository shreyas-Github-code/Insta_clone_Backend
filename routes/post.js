const mongoose = require('mongoose');

const postSchema = mongoose.Schema({
    caption: String,
    date: { type: Date, default: Date.now },
    picture: String,
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user',
    },
    likes: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user'
    }],
});

module.exports = mongoose.model('post', postSchema);