const userdb = require("../model/getEventsModel");
let UserService = {};

UserService.getAllEvents = () => {
  return userdb.getAllUserEvents().then((events) => {
    if (events.length === 0) {
      let error = new Error("No users found in the database");
      error.status = 404;
      throw error;
    } else return events;
  });
};
