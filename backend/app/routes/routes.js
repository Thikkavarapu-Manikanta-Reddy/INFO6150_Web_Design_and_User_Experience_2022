const express = require("express");
const router = express.Router();
const loginController = require("../controllers/loginController");
const signupController = require("../controllers/signupController");
const userEventsController = require("../controllers/userEventsController");
const eventController = require("../controllers/eventController");

router.post("/login", loginController.login);

router.post("/signup", signupController.signup);

router.get("/getUserEvents", userEventsController.getStudentEvents);

router.post("/postEvent", eventController.postEvents);

router.get("/getStudentEvents", userEventsController.getUserEvents); //query student collection and change name to getStudent

router.post("/postStudentEvents");

router.delete('/deleteEvent', eventController.deleteEvent);

module.exports = router;

//swap getUserEvents, getStudentEvents
//after swapping has been done, in getStudent instead of quering in event, creat new collection STUDENT and get data from there
//getUserEvents untouched
// postStudentEvents => STUDENT collection
