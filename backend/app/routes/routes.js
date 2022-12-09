const express = require('express')
const router = express.Router();
const loginController = require("../controllers/loginController");
const signupController = require("../controllers/signupController");
const userEventsController = require("../controllers/userEventsController");

router.post('/login', loginController.login);

router.post('/signup', signupController.signup);


router.get("/getUserEvents", userEventsController.getUserEvents);

module.exports = router;