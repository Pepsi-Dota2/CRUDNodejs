const mysql = require("mysql2");
const {config}  =require("dotenv");
config();

const Mysqlclient = mysql.createPool({
    host : process.env.MYSQL_HOST,
    user : process.env.MYSQL_USER,
    password : process.env.MYSQL_PASSWORD,
    database : process.env.MYSQL_DATABASE,
    port : process.env.MYSQL_PORT
})

Mysqlclient.getConnection(function(error){
    if(error){
        console.log("error connection" , error);
        return;
    }
    console.log("connect mysql successfully");
})

module.exports = Mysqlclient.promise();