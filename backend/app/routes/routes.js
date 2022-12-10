const express = require("express");
const router = express.Router();
const loginController = require("../controllers/loginController");
const signupController = require("../controllers/signupController");
const userEventsController = require("../controllers/userEventsController");
const eventController = require("../controllers/eventController");

router.post("/login", loginController.login);

router.post("/signup", signupController.signup);

router.get("/getUserEvents", userEventsController.getUserEvents);

router.post("/postEvent", eventController.postEvents);

router.get("/getStudentEvents", userEventsController.getStudentEvents);

router.post("/postStudentEvents", eventController.postStudentEvents);

router.delete('/deleteEvent', eventController.deleteEvent);

module.exports = router;
