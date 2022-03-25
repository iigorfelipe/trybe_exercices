const mysql = require('mysql2/promise');

const connection = mysql.createPool({
  host: 'localhost',
  user: 'igor',
  password: 'igor6483',
  database: 'model_example'
});

module.exports = connection;