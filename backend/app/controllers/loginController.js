const express = require('express');
const loginServices = require('../services/loginServices');
const router = express.Router();
const validator = require('../utilities/validators');
const bcrypt = require('bcrypt');
const User = require('../model/User')

const loginUser = async (req, res) => {
    try {
       // validator.validateFullName(req.body.fullName);
        validator.validateEmail(req.body.email);
        validator.validatePassword(req.body.password);

        let salt = await bcrypt.genSalt(15);
        let hash = await bcrypt.hash(req.body.password, salt);

        req.body.password = hash;

        const user = new User(req.body);

        loginServices.createUser(user).then(result => {
            if (result != null)
                res.json("User created Successfully");
        }).catch(err => {
            res.status(400);
            res.json({ "message": err.message });
        });
    }
    catch (err) {
        res.status(400);
        res.json({ "message": err.message });
    }
}

module.exports = {loginUser}
