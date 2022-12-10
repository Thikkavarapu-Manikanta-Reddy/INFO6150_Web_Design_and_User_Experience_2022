const Events = require("../model/eventsPosted");
const eventServices = require("../services/eventServices");

const postEvents = async (req, res) => {
  const newEvent = new Events(req.body);

  console.log("ID " + req.body.id);

  eventServices
    .createEvents(newEvent)
    .then((result) => {
      if (result != null && newEvent.status == "Create") {
        res.json("Event posted Successfully");
      } else if (result != null && newEvent.status == "Edit") {
        res.json("Event updated Successfully");
      }
    })
    .catch((err) => {
      res.status(400);
      res.json({ message: err.message });
    });
};

const deleteEvent = async (req, res) => {
  try {
    let eventId = req.body.id;
    eventServices
      .deleteEvents(eventId)
      .then((result) => {
        res.status(200);
        res.json(`Event with ID ${result} is deleted successfully`);
      })
      .catch((err) => {
        res.status(400);
        res.json({ message: err.message });
      });
  } catch (err) {}
};

module.exports = { postEvents, deleteEvent };
