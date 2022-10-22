var mysql = require('mysql');

var connection = mysql.createConnection({
  host: '127.0.0.1',
  user: 'root',
  password: 'password',
  database: 'cowlist'
})

connection.connect((err) => {
  if (err) {
    console.log(err);
    return;
  } else {
    console.log('connected as id ' + connection.threadId);
  }
});


module.exports = connection;