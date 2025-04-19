const bcrypt = require('bcryptjs');
const users = require('../../models/users');


const handleLoginUser = async (req)=>{
    //extract data from the request body
    const {email,password} = req.body;
    console.log(email,password);

    //check user exist or not
    const user = await users.findOne({email}).select('+password');
    console.log(user,"user");
    if(!user){
       throw new Error('User not found');
    }
    console.log(password,"password line 16");
    console.log(user.password,"password line 17");
    //match password
    const isMatch = await bcrypt.compare(password,user.password);
    console.log(isMatch,"isMatch");
    if(!isMatch){
        throw new Error('Invalid Credentials');
    }
    return {
        msg:'User logged in successfully',
        user: {
            name: user.name,
            email: user.email
        },
    };

}

module.exports = {handleLoginUser};