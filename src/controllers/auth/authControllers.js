const bcrypt = require('bcryptjs');
const user = require('../../models/users');
const generateToken = require('../../utils/genrateToken');
const {handleRegistrationUser} = require("../../services/auth/authRegistration");
const registerUser = async (req,res)=>{

    try{
       const result = await  handleRegistrationUser(req)
        res.status(201).json(result);
    }catch(err){
        console.log("this is error"+err.message+"something went wrong");
        res.status(500).json({
            msg:'server error'
        })
    }
}

//export module
module.exports = {
    registerUser
}