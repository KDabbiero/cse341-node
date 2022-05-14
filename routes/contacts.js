'use strict';

const { append } = require('express/lib/response');
const { create_a_contact, list_all_contacts } = require('../api/user');
const Post = require('../db/user')

var mongoose = require('mongoose'),
  Contact = mongoose.model('Contacts');

list_all_contacts = function(req, res) {
  Contact.find({}, function(err, contact) {
    if (err)
      res.send(err);
    res.json(contact);
  });
};

create_a_contact();