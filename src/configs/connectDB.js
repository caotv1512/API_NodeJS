import mysql2 from 'mysql2';

const connection = mysql2.createConnection({
  host: 'localhost',
  database: 'future_academy',
  user: 'root',
  password: '12345',
});

connection.connect(function (err) {
  if (err) throw err;
  console.log('Database connected!');
});

module.exports = connection;
