const jwt = require('jsonwebtoken');

const generateToken = (userId,userEmail,userRole,userDepartment,userDesignation) =>{
    //sign is used to create token and taking three parameters one is payload and second is secret key and third is expiration time
    return jwt.sign({
                id: userId,
                email: userEmail,
                role: userRole,
                department: userDepartment,
                designation: userDesignation
                },
                process.env.JWT_SECRET,
        {
                expiresIn:'1d'
                }
    )
}

module.exports = generateToken;