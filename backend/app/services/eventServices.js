const userdb = require('../model/eventUserModel');
let eventServices = {};

eventServices.createEvents = (UserObj) => {
    return userdb.findEventsByNameAndType(UserObj.eventId).then(object => {
        {
            console.log("inside findEventsByNameAndType")
            if (object != null) {
                let err = new Error("Event already exists at this Time");
                err.status = 404;
                throw err;
            } else {
                return userdb.postEvent(UserObj).then((data) => {
                    if (data) {
                        return data;
                    }
                    else {
                        let err = new Error("Unable to Post an Event");
                        err.status = 404;
                        throw err;
                    }
                })
            }
        }
    })
} 

module.exports= eventServices;