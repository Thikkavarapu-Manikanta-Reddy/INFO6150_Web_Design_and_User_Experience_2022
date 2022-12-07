const bcrypt = require("bcrypt");
const loginServices = require("../services/loginServices");
const loginUser = require("../model/loginUser");
const userdb = require("../model/loginUserModel");
//const User = require('../model/User')
const validator = require("../utilities/Validators");
const { json } = require("body-parser");

const login = async (req, res) => {
  try {
    console.log("inside Login func");
    const email = req.body.email;
    const password = req.body.password;

    console.log(email);

    const userDataFromDb = await userdb.findUserByEmail(email);
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
