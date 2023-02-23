// const express = require('express');
// const db = require('./config/db')
// const cors = require('cors')

// const app = express();

// const PORT = process.env.PORT; 
// app.use(cors());
// app.use(express,json())

// //put sends for updates and things 

// //Getting things: 

// //Route to get user + passwords (i lied there are no passwords right now)
// app.get("/api/get", (req,res)=>{
//     db.query("SELECT EXISTS(SELECT username FROM student WHERE username = ? )", (err,result)=>{
//         if(err) {
//             console.log(err)
//         }
//     res.send(result)
//     }); 
// });

// async function checkLogIn(req, res) {
//     try {
//         const db = await con.connect()
//         const result = await db.query('SELECT username FROM student');
//         const results = {}

//     }
// }



// //Posting things:

// // //saving log in info
// // app.post('/api/create', (req,res)=> {
    
// // })




// //APP.LISTEN
// app,listen(PORT, console.log(`server is listening to the poe`))
