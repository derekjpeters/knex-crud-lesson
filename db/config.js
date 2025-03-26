const knex = require('knex');
const config = require('../knexfile');

// 💬 Connects our app to the database using the "development" environment config
module.exports = knex(config.development);
