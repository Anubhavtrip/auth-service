const jwt = require('jsonwebtoken');
require('dotenv').config(); //extract env details


//authentication by using token

const verifyToken = async (req,res,next)=>{
    //extract token
    const token  =  req.headers.authorization?.split(" ")[1];
    if(!token) return res.status(401).json({
        status:false,
        msg:"Token is not provided"
    });
    try{
        const decode = jwt.verify(token,process.env.JWT_SECRET);
        req.user = decode;
        next();
    }catch (e) {
        res.status(401).json({
            status:false,
            msg:"Token is invalid or expired"
        })
    }
}

//validate that user is hr

const isHR  = (req,res,next)=>{
    if(req.user.role != "hr"){
        res.status(401).json({status:false,msg:"Hr access only"})
    }
    next();
}

//validate that user is admin

const isAdmin = (req,res,next)=>{
    if(req.user.role!="admin"){
        res.status(401).json({
            status:false,
            msg:"Admin access only"
        })
    }
}


module.exports= {
    verifyToken,
    isAdmin,
    isHR
}