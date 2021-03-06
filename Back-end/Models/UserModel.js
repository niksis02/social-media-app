const mongoose = require('mongoose');

const reqString = {
    type: String,
    required: true
}

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    surname: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        trim: true,
        unique: true,
        lowercase: true
    },
    password: reqString,
    gender: {
        type: Boolean,
        required: true
    },
    birth: reqString
});

const User = mongoose.model('Users', userSchema);

module.exports = User;