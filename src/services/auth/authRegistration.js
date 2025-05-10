const bcrypt = require('bcryptjs');
const user = require('../../models/users');
const generateToken = require('../../utils/genrateToken');
const generateEmpCode = require("../../utils/genrateEmpCode");

const handleRegistrationUser = async (req)=>{

    //get data from the request body
    const {name,email,password,role,department,isActive,designation} = req.body;
    //check user already exists or not
    const existingUser = await user.findOne({email});
    if(existingUser){
        return {
            msg:'User already exists please use different email'
        }
    }
    const salt = await bcrypt.genSalt(10); //Random string added to password before hashing
    const hashedPassword = await bcrypt.hash(password,salt);
    //generate autonumber
    let autonumber = await generateEmpCode();

    //insert user in the database
    const newUser = new user({
        name,
        email,
        password:hashedPassword,
        role,
        department,
        isActive,
        designation,
        employee_code:autonumber
    })

    //save user in the database
    await newUser.save()
    //create token and store important data in the token
    const token = generateToken(
        newUser._id,
        newUser.email,
        newUser.role,
        newUser.department,
        newUser.designation,
        newUser.employee_code
    );
    console.log(token);
    return{
        msg: "User created successfully",
        newUser: { email: newUser.email },
        token,
    }


}

module.exports = {handleRegistrationUser};