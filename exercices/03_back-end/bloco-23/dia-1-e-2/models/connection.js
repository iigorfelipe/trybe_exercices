const mysql = require('mysql2/promise');

const connection = mysql.createPool({
  user: 'igor',
  password: 'igor6483',
  host: 'localhost',
  database: 'model_example'
});

module.exports = connection;