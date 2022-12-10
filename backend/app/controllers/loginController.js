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
      res.json({ data: userDataFromDb, success: true, message: "Successfully authenticated !!" });

    } else {
      res.status(404);
      res.json({ message: "User not found. Please signup", success: false });
    }
  } catch (err) {
    console.log(err);
    res.status(400);
    res.json({ message: "Please check the entered details !!", success: false });
  }
};

module.exports = { login };
