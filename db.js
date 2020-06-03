const mysql = require('mysql');

// DB infos
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'root',
  database: 'bot-discord',
  charset: 'utf8mb4_general_ci',
});

// Connexion Mysql
connection.connect(error => {
  if (error) throw error;
  console.log('Mysql Connected!');
});

module.exports = connection;
