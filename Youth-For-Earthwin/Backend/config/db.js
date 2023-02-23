//ALSO MIGHT WANNA SWITCH THIS UP BC ITS NOT SECUERE

const mysql = require('mysql')
const env = require('dotenv').config()

const db = mysql.createConnection({
    host: "classmysql.engr.oregonstate.edu/",
    user: "cs440_willijud",
    password: "2289",
    database: "cs440_willijud"
})

db.connect((err)=>{
    if(err) throw err
    console.log('database conncted successfuly')
})

module.exports = db;
