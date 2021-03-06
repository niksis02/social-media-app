const mongoose = require('mongoose');

const imageSchema = mongoose.Schema({
    userId: {
        type: String,
        requireed: true
    },
    postId: {
        type: String,
        required: true
    },
    imageURL: {
        type: String,
        required: true
    },
    profilePhoto: {
        type: Boolean,
        required: true
    },
    coverPhoto: {
        type: Boolean, 
        required: true
    },
    current: {
        type: Boolean,
        required: true
    }
    
});

const Image = mongoose.model('images', imageSchema);

module.exports = Image;