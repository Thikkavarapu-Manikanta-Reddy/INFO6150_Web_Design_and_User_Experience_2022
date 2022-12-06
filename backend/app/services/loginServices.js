//const User = require('../model/User');
const userdb = require('../model/loginUserModel');
const validator = require('../utilities/Validators');

const bcrypt = require('bcrypt');

let loginServices = {};

loginServices.loginUser = (UserObj) => {
    return userdb.findUserByEmail(UserObj.email).then(object => {
        {
            if (object != null) {
                let err = new Error("User already exists with this email");
                err.status = 404;
                throw err;
            } else {
                return userdb.createUser(UserObj).then((data) => {
                    if (data) {
                        return data;
                    }
                    else {
                        let err = new Error("Unable to Create");
                        err.status = 404;
                        throw err;
                    }
                })
            }
        }
    })
}

module.exports = loginServices;