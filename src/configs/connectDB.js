import mysql2 from 'mysql2';
require('dotenv').config();

const connection = mysql2.createConnection({
  host: process.env.HOST,
  database: process.env.DATABASE,
  user: process.env.USER,
  password: process.env.PASSWORD,
});

connection.connect(function (err) {
  if (err) throw err;
  console.log('Database connected!');
});

module.exports = connection;
