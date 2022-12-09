const bcrypt = require("bcrypt");
const userdb = require("../model/signupUserModel");
const validator = require("../utilities/Validators");
const { json } = require("body-parser");

const login = async (req, res) => {
  try {
    validator.validateFirstName(req.body.firstName);
    validator.validateLastName(req.body.lastName);
    validator.validateEmail(req.body.emailId);
    const emailId = req.body.emailId;

    console.log(emailId);

    const userDataFromDb = await userdb.findUserByEmail(emailId);
    console.log("userDataFromDb" + userDataFromDb);
    if (userDataFromDb) {
      

      res.json(userDataFromDb);
      
    } else {
      res.json("User not found. Please signup");
    }
  } catch (err) {
    console.log(err);
    res.status(400);
    res.json({ status: "Please Register!!" });
  }
};

module.exports = { login };
