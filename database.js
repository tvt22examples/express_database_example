const mysql = require('mysql');

const connectionString="mysql://root:test@localhost:3306/library";
const connection=mysql.createPool(connectionString);

module.exports=connection;