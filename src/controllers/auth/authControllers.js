const bcrypt = require('bcryptjs');
const user = require('../../models/users');
const generateToken = require('../../utils/genrateToken');
const {handleRegistrationUser} = require("../../services/auth/authRegistration");
const {handleLoginUser} = require("../../services/auth/authLogin");
const registerUser = async (req,res)=>{

    try{
       const result = await  handleRegistrationUser(req)
        console.log(result);
        res.status(201).json(result);
    }catch(err){
        console.log("this is error"+err.message+"something went wrong");
        res.status(500).json({
            msg:'server error'
        })
    }
}

//login user

const loginUser = async (req,res)=>{
    try{
        //function call for login cred
        const result = await handleLoginUser(req)
        res.status(200).json(result);
    }catch(err){
        console.log("this is error"+err.message+"something went wrong");
        res.status(500).json({
            msg:'server error'
        })
    }
}

//export module
module.exports = {
    registerUser,loginUser
}