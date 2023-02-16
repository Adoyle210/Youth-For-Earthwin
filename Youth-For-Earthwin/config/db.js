//ADD INFO 
//ASLO MIGHT WANNA SWITCH THIS UP BC ITS NOT SECUERE

const mysql = require('mysql')
const db = mysql.createConnection({
    host: "localhost",
    user: " ",
    password: " ",
    database: " "
})

module.exports = db;