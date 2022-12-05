const express = require('express')
const router = express.Router();
const loginController = require("../controllers/loginController");


router.post('/loginUser', loginController.loginUser);

// router.post('/loginUser',async(req, res)=> {
//     loginController.loginUser
//     console.log("inside routes")

//     try {
//         console.log("niuin"+req.body);
//        // validator.validateFullName(req.body.fullName);
//         validator.validateEmail(req.body.email);
//         validator.validatePassword(req.body.password);

//         let salt = await bcrypt.genSalt(15);
//         let hash = await bcrypt.hash(req.body.password, salt);

//         req.body.password = hash;

//         const newUser=new User({
//             email: req.body.email,
//             password: hash
//         })
//         newUser.save().then(()=>{
//             res.send({
//                 message: "User created successfully",
//                 status: 200,
//             })
//         })
//     }


//   catch(err){
//     res.status(400);
//     res.json({ "message": err.message });
//   };
// });
module.exports = router;