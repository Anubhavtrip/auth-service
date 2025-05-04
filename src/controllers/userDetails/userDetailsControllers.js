const {GetAllUsers,GetUserById, DeactivateUser} =  require("../../services/userDetails/userDetails")
//only hr
const getAllUsers = async(req,res)=>{
    try{
        const users = await GetAllUsers();
            res.status(200).json(users);

    }catch (e) {
        res.status(500).jsonp({
            status:false,
            msg:e.message
        })
    }
}

//get user by mongo id
const getUserById =  async(req,res)=>{
    try{
        const users = GetUserById(req,res);
        res.status(200).json(users);

    }catch (err){
        res.status(500).json({
            status:false,
            msg:err.message
        })
    }
}

//deactivate User only admin can do this
const deactivateUser = async (req,res)=>{
    try{
        const isBool = await DeactivateUser(req);
    }catch (e) {
        res.status(500).json({
            status:false,
            msg:e.message
        })
    }
}
module.exports={getAllUsers,getUserById,deactivateUser}