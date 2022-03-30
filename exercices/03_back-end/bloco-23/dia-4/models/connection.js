const mysql = require('mysql2/promise');
require('dotenv').config();

const connection = mysql.createPool({
  host: 'localhost',
  user: 'igor',
  password: process.env.PASSWORD,
  database: 'model_example'
});

module.exports = connection;