var mysql = require("mysql");
var connection;

if (process.env.JAWSDB_URL) {
  connection = mysql.createConnection(process.env.JAWSDB_URL);
}
else {
  connection = mysql.createConnection({
    port: 3306,
    user: "root",
    password: process.env.DB_PASS,
    database: "burgers_db"
  });
}

connection.connect(error => {
  if (error) return console.error(error);
  console.log("connected as id" + connection.threadId);
});

module.exports = connection;
