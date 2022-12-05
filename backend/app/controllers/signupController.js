const bcrypt = require('bcrypt');
const signupServices = require('../services/signupServices');
const signupUserModel = require('../model/signupUserModel');
const validator = require('../utilities/Validator');

const signup = (req, res) => {
    try {

    }
    catch (err) {
        res.status(400);
        res.json({ "message": err.message });
    }
}

module.exports = { signup };