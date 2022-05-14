const express = require('express');
const mongoose = require('mongoose');
const Contact = require('../db/user');
const route = express.Router();
const c = mongoose.model('contact');


function list_all_contacts() {
  route.get('/', (req, res) => {
    c.find({}, function(err, contact) {
      if (err)
        res.send(err);
      res.json(contact);
    });
  })
};

function find_contact_by_id() {
  route.get('/:_id', (req, res) => {
    c.findOne({_id: req.params._id}, function(err, contact) {
      if (err)
        res.send(err);
      res.json(contact);
    });
})
};



function create_a_contact() {
  route.post('/', (req, res) => {
  var new_contact = new c(req.body);
  new_contact.save(function(err, task) {
    if (err)
      res.send(err);
    res.json(task);
  return res._id;
  });
})};


function update_a_contact() {
  route.put('/contact/:id', (req, res) => {
    c.findOneAndUpdate({_id: req.params.id}, req.body, {new: true}, function(err, contact) {
      if (err)
        res.send(err);
      res.json(contact);
    });
  })
}

function delete_a_contact() {
  route.delete('/contact/:id', (req, res) => {
    c.deleteOne({_id: req.params.id}, function(err, contact) {
      if (err)
        res.send(err);
      res.json({ message: 'Task successfully deleted' });
    });
})};


list_all_contacts();

find_contact_by_id();

create_a_contact();

update_a_contact();

delete_a_contact();

module.exports = route;
