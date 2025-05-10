const jwt = require('jsonwebtoken');

const generateToken = (userId,userEmail,userRole,userDepartment,userDesignation,employee_code) =>{
    console.log(userId,userEmail,userRole,userDepartment,userDesignation,employee_code,"ttttttttt");
    //sign is used to create token and taking three parameters one is payload and second is secret key and third is expiration time
    return jwt.sign({
                id: userId,
                email: userEmail,
                role: userRole,
                department: userDepartment,
                designation: userDesignation,
                emp_code: employee_code,
                },
                process.env.JWT_SECRET,
        {
                expiresIn:'7d'
                }
    )
}

module.exports = generateToken;