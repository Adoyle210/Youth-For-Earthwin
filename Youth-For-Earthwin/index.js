// const express = require('express');
// const db = require('./config/db')
// const cors = require('cors')

// const app = express();
// const PORT = 3002;
// app.use(cors());
// app.use(express,json())


// //THIS IS A SAMPLE WE CAN CHANGE IT TO GET DIFFTENT STUFF 
// //WHEN THE DB IS DONE
// //THIS IS WHERE WE ADD ALL THE ROUTES/QUERYS AND THINGS

// //Route to get all the posts
// app.get("/api/get", (req,res)=>{
//     db.query("SELECT * FROM posts", (err,result)=>{
//         if(err) {
//             console.log(err)
//         }
//     res.send(result)
//     }); 
// });



// //APP.LISTEN


import { registerRootComponent } from 'expo';

import App from './App';

// registerRootComponent calls AppRegistry.registerComponent('main', () => App);
// It also ensures that whether you load the app in Expo Go or in a native build,
// the environment is set up appropriately
registerRootComponent(App);
