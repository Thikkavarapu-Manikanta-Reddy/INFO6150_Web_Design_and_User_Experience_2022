const userdb = require('../model/signupUserModel');
let signUpServices = {};
signUpServices.createUser = (UserObj) => {
    return userdb.findUserByEmail(UserObj.emailId).then(object => {
        {
            console.log("inside create user services")
            console.log("object id" + UserObj.emailId);
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
module.exports = signUpServices;