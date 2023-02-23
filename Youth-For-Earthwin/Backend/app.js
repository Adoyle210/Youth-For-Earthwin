const express = require('express');
const env = require('dotenv').config()
const db = require('./config/db')
const bodyparser = require('body-parser')
const cors = require('cors')


const app = express();
const user = require('./routes/userRoutes')
app.use(bodyparser.json())
app.use(cors())
app.use('/user',user)

const PORT = 30000; //process.env.PORT; 


//APP.LISTEN
app,listen(PORT, console.log(`server is listening to the port ${PORT}`))