'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var ContactsSchema = new Schema({
  firstName: {
    type: String,
    required: 'First Name'
  },
  lastName: {
    type: String,
    required: 'Last Name'
  },
  email: {
      type: String,
      required: 'Email Address'
  },
  favoriteColor: {
      type: String,
      required: 'Favorite Color'
  },
  birthDate: {
    type: Date,
    required: 'Birth Date'
  }
});

module.exports = mongoose.model('Contacts', ContactsSchema);