const Events = require("../model/eventsPosted");
const eventServices = require("../services/eventServices");

const postEvents = async (req, res) => {
  const newEvent = new Events(req.body);

  console.log("ID " + req.body.id);

  eventServices
    .createEvents(newEvent)
    .then((result) => {
      if (result != null && newEvent.status == "Create") {
        res.json({ success: true, message: "Event posted Successfully" });
      } else if (result != null && newEvent.status == "Edit") {
        res.json({ success: true, message: "Event updated Successfully" });
      }
    })
    .catch((err) => {
      res.status(400);
      res.json({success: false, message: err.message });
    });
};

const postStudentEvents = async (req, res) => {
  const newStudentEvent = new Events(req.body);

  eventServices
    .createStudentBookedEvents(newStudentEvent)
    .then((result) => {
      if (result != null) {
        res.json({success: true, message: "Event is successfully booked" });
      }
    })
    .catch((err) => {
      res.status(400);
      res.json({success: false, message: err.message });
    });
};

const deleteEvent = async (req, res) => {
  try {
    let eventId = req.body.id;
    eventServices
      .deleteEvents(eventId)
      .then((result) => {
        res.status(200);
        res.json({ success: true, message: `Event with ID ${result} is deleted successfully` });
      })
      .catch((err) => {
        res.status(400);
        res.json({success: false, message: err.message });
      });
  } catch (err) { }
};

module.exports = { postEvents, postStudentEvents, deleteEvent };
