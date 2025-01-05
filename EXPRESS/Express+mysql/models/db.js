const mysql = require('mysql2');

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'Srpan@070223',
  database: 'express',
});

module.exports = db;
