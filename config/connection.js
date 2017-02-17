//requiring some important information
var mysql = require("mysql");
var key = require("../key.js");

//creating the connection, connecting to the database, and exporting it
var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: key.mysql,
  database: "burger_db"
});

if (process.env.JAWSDB_URL){
  connection = mysql.createConnection(process.env.JAWSDB_URL);
}

connection.connect(function(err) {
  if (err) throw err;
});

module.exports = connection;