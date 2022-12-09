const Events = require("../model/eventsPosted");
const eventServices = require("../services/eventServices");

const postEvents = async (req, res) => {
  const newEvent = new Events(req.body);

  eventServices
    .createEvents(newEvent)
    .then((result) => {
      if (result != null) res.json("Event posted Successfully");
    })
    .catch((err) => {
      res.status(400);
      res.json({ message: err.message });
    });
};

module.exports = { postEvents };
