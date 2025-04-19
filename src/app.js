const express =require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();

//import routes
const registerUser = require('./routes/auth/registration')

//middlewares
app.use(cors());
app.use(express.json());

// Routes
app.get('/',(req,res)=>{
    res.send('Auth Service is Modular Now!');
})

//initiialize routes
app.use("/api/v1/auth",registerUser)

module.exports = app;