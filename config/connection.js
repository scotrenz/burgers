var mysql = require("mysql");

// if(process.env.JAWSDB_URL){
 var connection = mysql.createConnection('mysql://golthvidmihgc3e2:zbp98rynaylj7bkg@tuy8t6uuvh43khkk.cbetxkdyhwsb.us-east-1.rds.amazonaws.com:3306/l0385bsfgih7u0ul');
// } else{
//   connection = mysql.createConnection({
//     host: "localhost",
//     user: "scot",
//     password: "password",
//     database: "burgers_db"
//   });
// };

connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

module.exports = connection;
