const express = require('express');
const router =  express.Router();

const {registerUser} = require('../../controllers/auth/authControllers');
const {loginUser} = require('../../controllers/auth/authControllers');
//register user
router.post("/register", registerUser);
//login user
router.post("/login", loginUser);

module.exports = router;