//Config Database - DB 

const mysql = require('mysql');
const dbConfig = require('../config/db.config');

//Create a connection to the database
const connection = mysql.createConnection({
    host: dbConfig.HOST,
    user: dbConfig.USER,
    password: dbConfig.PASSWORD,
    database: dbConfig.DB
});

//Open mySQL connection (Abrindo a conexão)
connection.connect(error => {
    if (error) throw error;
    console.log("Sucessfully connected to the database");
});

module.exports = connection;