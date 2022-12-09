const collection = require('../utilities/connection');
const signUpUserModel = {};

signUpUserModel.findUserByEmail = (emailId) => {
    return collection.getUserCollectionSignUp().then(model => {
        return model.findOne({ "emailId": emailId }).then((userData) => {
            console.log("user Dataaaa" +userData);
            if (userData === null) {
                console.log("user Data" +userData);
                return null;

            }else{
                return userData;
            }
        })
    })
}

signUpUserModel.createUser = (newUser) => {
    return collection.getUserCollectionSignUp().then(userModel => {
        return userModel.create(newUser).then(data => {
            if (data)
                return true;
            else
                return false;
        })
    })
}


module.exports = signUpUserModel;