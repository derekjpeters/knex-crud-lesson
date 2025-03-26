const db = require('../db/config');

// 💬 Returns all users from the database
function find() {
  return db('users');
}

// 💬 Returns a single user by ID
function findById(id) {
  return db('users').where({ id }).first();
}

// 💬 Adds a new user and returns the inserted user
function add(user) {
  return db('users').insert(user).then(([id]) => findById(id));
}

// 💬 Updates a user by ID
function update(changes, id) {
  return db('users').where({ id }).update(changes);
}

// 💬 Deletes a user by ID
function remove(id) {
  return db('users').where({ id }).del();
}

module.exports = {
  find,
  findById,
  add,
  update,
  remove
};
