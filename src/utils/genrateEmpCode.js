const users = require('../models/users');

const generateEmpCode = async () => {
    let autonumber = await users.countDocuments();
    autonumber = autonumber + 1;
    autonumber = autonumber + 1000;
     let isDuplicate = await checkEmpCodeAlreadyExist(autonumber);
     if (isDuplicate){
         const getMaxEmpCode = await users.find({}).sort({employee_code:-1})
         .limit(1);
         autonumber = getMaxEmpCode[0].employee_code + 1;
         return autonumber;
     }else{
         return autonumber;

     }
}

const checkEmpCodeAlreadyExist = async (autoNumber) => {
    //declare variable
    let isDuplicate = false;
    const isExists = await users.find({
        employee_code: {$eq:autoNumber}
    });

    if (isExists){
        isDuplicate = true;
        return isDuplicate;
    }
    return false;
}

module.exports = generateEmpCode;