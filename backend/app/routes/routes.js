const express = require('express')
const router = express.Router();
const loginController = require("../controllers/loginController");
const signupController = require("../controllers/signupController")

router.post('/login', loginController.login);

router.put('/signup', signupController.signup);

module.exports = router;