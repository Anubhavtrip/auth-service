const bcrypt = require('bcryptjs');
const users = require('../../models/users');
const generateToken = require("../../utils/genrateToken");


const handleLoginUser = async (req)=>{
    //extract data from the request body
    const {email,password} = req.body;
    console.log(email,password);

    //check user exist or not
    const user = await users.findOne({email}).select('+password');

    if(!user){
       throw new Error('User not found');
    }

    //match password
    const isMatch = await bcrypt.compare(password,user.password);

    if(!isMatch){
        throw new Error('Invalid Credentials');
    }
    //create token and store important data in the token
    const token = generateToken(
        user._id,
        user.email,
        user.role,
        user.department,
        user.designation,
        user.employee_code

    );
    return {
        msg:'User logged in successfully',
        user: {
            token,
            name: user.name,
            email: user.email
        },
    };

}

module.exports = {handleLoginUser};