const user =  require("../../models/users");

const GetAllUsers = async ()=>{
    // fetch all user
    const users = await user.find({isActive:false}).select("-password");
    //return
    if(users){
        return{
            status:true,
            data:users
        }
    }else {
        return{
            status:false,
            msg:"Something went wrong || Only Hr can access this api"
        }
    }

}

//get user by user id

const GetUserById = async (req,res)=>{
    //fetch user by using user id or user code
    const users = await user.findById(req.params.id).select("-password");
    if(users){
        return{
            status:true,
            data:users
        }
    }else {
        return{
            status:false,
            msg:"Something went wrong || user not found please check user id"
        }
    }
}

//deactivate user

const DeactivateUser = async(req,res)=>{
    const isBool = await user.findByIdAndUpdate(req.params.id,{isActive: req.params.deactivate});
    if (!isBool){
        res.status(401).json({
            status:false,
            msg:"User not found || Only admin have access for this api"
        })
    }
    res.status(200).json({
        status:true,
        msg:"User successfully update || please check"
    })
}
//export the module
module.exports = {GetAllUsers,GetUserById,DeactivateUser}