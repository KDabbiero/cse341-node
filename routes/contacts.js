'use strict';

const { append } = require('express/lib/response');


var mongoose = require('mongoose'),
  Contact = mongoose.model('Contacts');

list_all_tasks = function(req, res) {
  Contact.find({}, function(err, task) {
    if (err)
      res.send(err);
    res.json(task);
  });
};

module.exports = function(app) {

  
    // todoList Routes
    app.route('/contacts')
      .get(list_all_tasks);
  
  
    app.route('/contacts/:contactId')
      .get(read_a_task);
};