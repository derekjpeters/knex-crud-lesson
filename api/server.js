const express = require('express');
const Users = require('../models/users-model');

const server = express();
server.use(express.json());

// 💬 GET /api/users - Fetch all users
server.get('/api/users', async (req, res) => {
  try {
    const users = await Users.find();
    res.json(users);
  } catch (err) {
    res.status(500).json({ error: 'Could not retrieve users' });
  }
});

// 💬 GET /api/users/:id - Get a user by ID
server.get('/api/users/:id', async (req, res) => {
  try {
    const user = await Users.findById(req.params.id);
    user ? res.json(user) : res.status(404).json({ message: 'User not found' });
  } catch (err) {
    res.status(500).json({ error: 'Error finding user' });
  }
});

// 💬 POST /api/users - Create a new user
server.post('/api/users', async (req, res) => {
  try {
    const newUser = await Users.add(req.body);
    res.status(201).json(newUser);
  } catch (err) {
    res.status(500).json({ error: 'Could not add user', message: err.message });
  }
});

// 💬 PUT /api/users/:id - Update user
server.put('/api/users/:id', async (req, res) => {
  try {
    const count = await Users.update(req.body, req.params.id);
    count > 0
      ? res.json({ message: 'User updated' })
      : res.status(404).json({ message: 'User not found' });
  } catch (err) {
    res.status(500).json({ error: 'Could not update user' });
  }
});

// 💬 DELETE /api/users/:id - Remove user
server.delete('/api/users/:id', async (req, res) => {
  try {
    const count = await Users.remove(req.params.id);
    count > 0
      ? res.json({ message: 'User deleted' })
      : res.status(404).json({ message: 'User not found' });
  } catch (err) {
    res.status(500).json({ error: 'Could not delete user' });
  }
});

module.exports = server;
