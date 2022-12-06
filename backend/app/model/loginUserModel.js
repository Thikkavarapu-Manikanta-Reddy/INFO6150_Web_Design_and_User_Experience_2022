const collection = require('../utilities/connection');

const loginUserModel = {};

loginUserModel.findUserByEmail = (email) => {
    return collection.getUserCollection().then(model => {
        return model.findOne({ "email": email }).then((userData) => {
            if (userData === null) {
                return null;

            } else {
                return userData;
            }
        })
    })
}

//create user
loginUserModel.createUser = (newUser) => {
    return collection.getUserCollection().then(loginUserModel => {
        return loginUserModel.create(newUser).then(data => {
            if (data)
                return true;
            else
                return false;
        })
    })
}


module.exports = loginUserModel;