const express =require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();

//middlewares
app.use(cors());
app.use(express.json());

// Routes
app.get('/',(req,res)=>{
    res.send('Auth Service is Modular Now!');
})

module.exports = app;