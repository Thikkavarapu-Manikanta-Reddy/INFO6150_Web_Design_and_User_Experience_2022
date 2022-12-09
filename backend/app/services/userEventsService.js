const userdb = require("../model/getEventsModel");
let UserService = {};

UserService.getAllEvents = () => {
  return userdb.getAllStudentEvents().then((events) => {
    if (events.length === 0) {
      let error = new Error("No events found in the database");
      error.status = 404;
      throw error;
    } else return events;
  });
};

UserService.getUserEvents = () => {
  return userdb.getUserEvents().then((userEvents) => {
    if (userEvents.length == 0) {
      let error = new Error("No events found in the database");
      error.status = 404;
      throw error;
    } else return userEvents;
  });
};

module.exports = UserService;
