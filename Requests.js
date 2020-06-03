const connection = require('./db');
const sql = 'INSERT INTO Messages (User, Message, Heure) VALUES ?';

exports.insert = values => {
  connection.query(sql, [values]);
};
