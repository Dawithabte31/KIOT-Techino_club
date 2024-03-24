const express = require('express');
const { isAuthenticated} = require('../middleware/auth');
const router = express.Router();
const authController = require('../controllers/authController'); 
// const userProfile=require('../controllers/userProfile');
router.post('/register', authController.register);
router.post('/login',authController.login);
router.get('/logout',authController.logout);
router.get('/me',isAuthenticated,authController.userProfile);
module.exports = router;

