const userService = require("../services/userEventsService");

const getUserEvents = async (req, res) => {
  userService
    .getUserEvents()
    .then((result) => {
      res.status(200);
      res.json(result);
    })
    .catch((error) => {
      res.status(400);
      res.json({ message: error.message });
    });
};

module.exports = { getUserEvents };
