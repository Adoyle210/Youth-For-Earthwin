//ADD INFO 
//ASLO MIGHT WANNA SWITCH THIS UP BC ITS NOT SECUERE

const mysql = require('mysql')
const db = mysql.createConnection({
    host: "classmysql.engr.oregonstate.edu/",
    user: "cs440_willijud",
    password: "2289",
    database: "cs440_willijud"
})

module.exports = db;
