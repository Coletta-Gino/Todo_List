const mysql = require('mysql2');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'mytodo',
  password: 'mytodo',
  database: 'mytodo',
});

module.exports = connection;