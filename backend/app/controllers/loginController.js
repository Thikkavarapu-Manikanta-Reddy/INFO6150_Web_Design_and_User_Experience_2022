const bcrypt = require('bcrypt');
const loginServices = require('../services/loginServices');
const loginUser = require('../model/loginUser');
//const User = require('../model/User')
const validator = require('../utilities/Validators');

const login = async(req, res) => {
    try {
        validator.validateEmail(req.body.email);
        validator.validatePassword(req.body.password);

        let salt = await bcrypt.genSalt(15);
        let hash = await bcrypt.hash(req.body.password, salt);

        req.body.password = hash;

        const user = new loginUser(req.body);

        loginServices.loginUser(user).then(result => {
                
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

module.exports = { login };