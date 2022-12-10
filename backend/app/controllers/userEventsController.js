const userService = require("../services/userEventsService");

const getStudentEvents = async (req, res) => {
  userService
    .getAllEvents()
    .then((result) => {
      res.status(200);
      res.json({data: result, success: true});
    })
    .catch((error) => {
      res.status(400);
      res.json({ success: false, message: error.message });
    });
};

const getUserEvents = async (req, res) => {
  userService
    .getUserEvents()
    .then((result) => {
      res.status(200);
      res.json({data: result, success: true});
    })
    .catch((error) => {
      res.status(400);
      res.json({ success: false, message: error.message });
    });
};

module.exports = { getStudentEvents, getUserEvents };
