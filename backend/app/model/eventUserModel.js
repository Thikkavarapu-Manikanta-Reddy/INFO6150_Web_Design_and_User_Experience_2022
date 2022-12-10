const collection = require("../utilities/connection");
const eventUserModel = {};

eventUserModel.findEventsByNameAndType = (eventId) => {
  return collection.postEvents().then((eventModel) => {
    return eventModel.findOne({ id: eventId }).then((eventData) => {
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
    console.log(newEvent.status);
    if (newEvent.status == "Create") {
      return eventModel.create(newEvent).then((data) => {
        if (data) return true;
        else return false;
      });
    } else {
      return eventModel
        .updateOne(
          { id: newEvent.id },
          {
            $set: {
              title: newEvent.title,
              description: newEvent.description,
              ticketCount: newEvent.ticketCount,
              dateAndTime: newEvent.dateAndTime,
              dateAndTimeObj: newEvent.dateAndTimeObj,
              type: newEvent.type,
              location: newEvent.location,
              status: newEvent.status,
            },
          }
        )
        .then((data) => {
          if (data.modifiedCount == 1) {
            return newEvent;
          } else {
            return null;
          }
        });
    }
  });
};

eventUserModel.findEventByEventId = (eventId) => {
  return collection.deleteEvents().then((eventModel) => {
    return eventModel.findOne({ id: eventId }).then((eventData) => {
      console.log("EVENT DATA  " + eventData);
      if (eventData === null) {
        console.log("inside IFFF findEventByEventId" + eventData);
        return null;
      } else {
        return eventData;
      }
    });
  });
};

eventUserModel.findStudentEventByEventId = (eventId) => {
  return collection.getStudentEvents().then((eventModel) => {
    return eventModel.findOne({ id: eventId }).then((eventData) => {
      if (eventData === null) {
        return null;
      } else {
        return eventData;
      }
    });
  });
};

eventUserModel.deleteEvent = (eventId) => {
  return collection.deleteEvents().then((model) => {
    return model.deleteOne({ id: eventId }).then((data) => {
      if (data.deletedCount == 1) {
        console.log("inside delete event if");
        return eventId;
      } else {
        return null;
      }
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
