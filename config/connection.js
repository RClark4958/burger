var mysql = require("mysql");

var connection;

// if (process.env.JAWSDB_URL) {
//   connection = mysql.createConnection(process.env.JAWSDB_URL);
// }
// else {
//   connection = mysql.createConnection({
//     port: 3306,
//     user: "root",
//     password: process.env.DB_PASS,
//     database: "burgers_db"
//   });
// }

connection = mysql.createConnection({
  host: "xefi550t7t6tjn36.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
  user: "mu9xskgdpnr2f5ls",
  password: process.env.JAWSDB_PASS,
  port: 3306,
  database: "eefb7d3abjstwrf5"
  
})

connection.connect(error => {
  if (error) return console.error(error);
  console.log("connected as id" + connection.threadId);
});

module.exports = connection;
