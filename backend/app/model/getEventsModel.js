const collection = require("../utilities/connection");

const userModel = {};

userModel.getAllStudentEvents = () => {
  return collection.getStudentEvents().then((userModel) => {
    return userModel.find().then((users) => users);
  });
};

userModel.getUserEvents = () => {
  return collection.getUserEvents().then((userModel) => {
    return userModel.find().then((users) => users);
  });
};

module.exports = userModel;
