'use strict';
module.exports = function(app) {
  var contacts = require('../controllers/controllers');

  // todoList Routes
  app.route('/tasks')
    .get(contacts.list_all_contacts)
    .post(contacts.create_a_contact);


  app.route('/tasks/:taskId')
    .get(contacts.read_a_contact);
    // .put(todoList.update_a_task)
    // .delete(todoList.delete_a_task);
};