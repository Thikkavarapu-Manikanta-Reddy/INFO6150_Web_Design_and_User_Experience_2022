class SignupUserModel {
    constructor( obj ) {
        this.name = obj.name;
        this.email = obj.email;
        this.password = obj.password;
    }
}

module.exports = SignupUserModel;