const mongoose = require('mongoose');

const contact = new mongoose.Schema({
    firstName: {
        type: String
    },
    lastName: {
        type: String
    },
    email: {
        type: String
    },
    favoriteColor: {
        type: String
    },
    birthDate: {
        type: Date
    }
});

module.exports = Contact = mongoose.model('contact', contact);