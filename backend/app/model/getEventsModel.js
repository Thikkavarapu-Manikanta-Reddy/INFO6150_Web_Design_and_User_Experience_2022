const collection = require("../utilities/connection");

const userModel = {};

userModel.getAllUserEvents = () => {
  return collection.getUserEvents().then((userModel) => {
    return userModel.find().then((users) => users);
  });
};
