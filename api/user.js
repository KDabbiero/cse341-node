const express = require('express');
const mongoose = require('mongoose');
const Contact = require('../db/user');
const route = express.Router();
const c = mongoose.model('contact');

route.post('/', async (req,res) => {
    const{ firstName, lastName, email, favoriteColor, birthDate } = req.body;
    let contact = {};
    contact.firstName = firstName;
    contact.lastName = lastName;
    contact.email = email;
    contact.favoriteColor = favoriteColor;
    contact.birthDate = birthDate;
    let contactModel = new Contact(contact);
    await contactModel.save();
    res.json(contactModel);
});

route.get('/', (req, res) => {
    c.find({}, function(err, contact) {
      if (err)
        res.send(err);
      res.json(contact);
})
});


route.get('/', (req, res) => {
    c.find({_id: "6272134a904a22bd9c0fba8a"}, function(err, contact) {
      if (err)
        res.send(err);
      res.json(contact);
    });
});



module.exports = route;