const express  = require('express');
const userDetailsRouter  = express.Router();

//import authentication for access control
const {verifyToken,isHR,isAdmin}  =  require("../../middleware/authMiddleware");
//get all user import
const {getAllUsers,getUserById, deactivateUser} = require("../../controllers/userDetails/userDetailsControllers");

//always use this middleware
userDetailsRouter.use(verifyToken);

//get all user by only hr

userDetailsRouter.get("/",isHR,getAllUsers);
//get user by using mongo id
userDetailsRouter.get("/:id",getUserById);
//user update for active or not
userDetailsRouter.patch("/:id/deactivate",isAdmin,deactivateUser);



module.exports = userDetailsRouter;