const bcrypt = require("bcrypt");
const signupServices = require("../services/signupServices");
const SignUpUser = require("../model/signUpUser");
const validator = require("../utilities/Validators");

const signup = async (req, res) => {
  try {
    validator.validateFirstName(req.body.firstName);
    validator.validateLastName(req.body.lastName);
    validator.validateEmail(req.body.emailId);
    validator.validatePassword(req.body.password);
    console.log("insideController");
    let salt = await bcrypt.genSalt(15);
    let hash = await bcrypt.hash(req.body.password, salt);

    req.body.password = hash;

    const newUser = new SignUpUser(req.body);
    console.log("vall " + req.body.firstName);
    signupServices
      .createUser(newUser)
      .then((result) => {
        if (result != null) res.json("User created Successfully");
      })
      .catch((err) => {
        res.status(400);
        res.json({ message: err.message });
      });
    console.log("inside Signup function");
  } catch (err) {
    res.status(400);
    res.json({ message: err.message });
  }
};

module.exports = { signup };
