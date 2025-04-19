const express = require('express');
const router =  express.Router();

const {registerUser} = require('../../controllers/auth/authControllers');

router.post("/register", registerUser);

module.exports = router;