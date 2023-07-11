const mysql = require('mysql')

const dbConnection = mysql.createPool({
    connectionLimit : 10,
    host            : 'localhost',
    user            : 'root',
    password        : '',
    database        : 'ilearn-tamil-wordle'
})

module.exports = dbConnection;
