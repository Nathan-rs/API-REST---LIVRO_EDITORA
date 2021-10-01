const mysql = require('mysql');

const connection = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    database: process.env.DB_NAME,
});

connection.connect((error)=>{
    if(error) throw error;
    console.log(`conectado ao Banco de Dados: ${process.env.DB_NAME}`);
});

module.exports = connection;