const collection = require("../utilities/connection");
const eventUserModel = {};

eventUserModel.findEventsByNameAndType = (eventId) => {
  return collection.postEvents().then((eventModel) => {
    return eventModel.findOne({ eventId: eventId }).then((eventData) => {
      console.log("user Dataaaa" + eventData);
      if (eventData === null) {
        console.log("user Data" + eventData);
        return null;
      } else {
        return eventData;
      }
    });
  });
};

eventUserModel.postEvent = (newEvent) => {
  return collection.postEvents().then((eventModel) => {
    return eventModel.create(newEvent).then((data) => {
      if (data) return true;
      else return false;
    });
  });
};

eventUserModel.postStudentEvent = (newStudentEvent) => {
  return collection.postStudentEvents().then((eventModel) => {
    return eventModel.create(newStudentEvent).then((data) => {
      if (data) return true;
      else return false;
    });
  });
};

module.exports = eventUserModel;
