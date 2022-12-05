const express = require('express');
const router = express.Router();
var bodyParser = require('body-parser');
const loginController = require("../controllers/loginController");
const validator = require('../utilities/validators');
const bcrypt = require('bcrypt');
const User = require('../model/loginUserModel');

router.post('/loginUser',async(req, res)=> {
    //loginController.loginUser
    console.log("inside routes")

    try {
        console.log("niuin"+req.body);
       // validator.validateFullName(req.body.fullName);
        validator.validateEmail(req.body.email);
        validator.validatePassword(req.body.password);

        let salt = await bcrypt.genSalt(15);
        let hash = await bcrypt.hash(req.body.password, salt);

        req.body.password = hash;

        const newUser=new User({
            email: req.body.email,
            password: hash
        })
        newUser.save().then(()=>{
            res.send({
                message: "User created successfully",
                status: 200,
            })
        })

       /* userService.createUser(user).then(result => {
            if (result != null)
                res.json("User created Successfully");
        }).catch(err => {
            res.status(400);
            res.json({ "message": err.message });
        });*/
    }


  catch(err){
    res.status(400);
    res.json({ "message": err.message });
  };
});
module.exports = router;