const express =require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();

//import routes
const userAuth = require('./routes/auth/user_auth')
const userDetailsRouter = require("./routes/user/user_details");

//middlewares
// app.use(cors(
//     {
//         origin: process.env.CLIENT_URL,
//         credentials: true
//     }
// ));
app.use(cors());
app.use(express.json());

// Routes
app.get('/',(req,res)=>{
    res.send('Auth Service is Modular Now!');
})

//initiialize routes
app.use("/api/v1/auth",userAuth)
app.use("/api/v1/user",userDetailsRouter)

module.exports = app;