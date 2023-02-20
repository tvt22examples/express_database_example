const mysql = require('mysql');

//const connectionString="mysql://tvt22spo:tvtpass@localhost:3306/library";
//const connection=mysql.createPool(connectionString);
const connection=mysql.createPool(process.env.mysqlString);

module.exports=connection;