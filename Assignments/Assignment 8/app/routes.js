const bodyParser = require('body-parser');
const Sample = require('./models/sample');
const bcrypt = require('bcrypt');

const fullNameRegEx = /^[a-zA-Z]+$/;
const emailRegEx = /([\w.]+)@([\w\.]+)\.(\w+)/;
const passwordRegEx = ("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,14})");

module.exports = (app) => {

    app.get('/user/getAll', function (req, res) {
        Sample.find(function (error, samples) {
            if (error)
                res.send(error);
            console.log('samples', samples);
            res.status(200);
            res.json(samples);
        });
    });

    app.post('/user/create', bodyParser.json(), function (req, res) {

        var fullName = req.body.fullName;
        var email = req.body.email;
        var password = req.body.password;

        if (fullName && email && password) {

            if (!fullName.trim().match(fullNameRegEx)) {
                res.status(400);
                res.json("Invalid Full Name. Please only enter alphabets");
            }

            else if (!email.trim().match(emailRegEx)) {
                res.status(400);
                res.json("Invalid Email Address");
            }

            else if (!password.trim().match(passwordRegEx)) {
                res.status(400);
                res.json("Password should be 8-14 characters long. Must contain an uppercase letter and a lowercase letter, a special character and a numeric character (0-9) ");
            }

            else {

                var user = new Sample(req.body);
                user.save(function (error, data) {
                    if (error)
                        console.log('error');
                    console.log('Saved Successfully');
                    res.status(201)
                    res.json(data);
                });
            }

        }
        else {
            res.json("Please enter all required fields");
        }
    });

    app.delete('/user/delete', async function (req, res) {
        let emailDelete = req.body.email;
        let passwordDelete = req.body.password;

        if (emailDelete && passwordDelete) {
            const user = await Sample.findOne({ email: emailDelete });

            if (user == null) {
                res.status(400);
                res.json("Email address not found");
                return;
            }
            else {
                const isMatch = await user.isValidPassword(passwordDelete);
                if (!isMatch) {
                    res.status(400);
                    res.json({ "message": "Invalid old password!" });
                    return;
                }
            }

            Sample.findOneAndDelete({ email: emailDelete }, function (error, doc) {
                if (error) {
                    res.json("Delete failed! Try again.");
                    console.log("Delete failed!");
                    return
                }
                if (doc == null) {
                    res.status(400);
                    res.json("User Details doesn't exist, Please check the details again.");
                    return
                }

                else {
                    res.status(201);
                    res.json("User Details deleted successfully");
                    return;
                }
            });
        }
        else {
            res.json("Please enter all required fields");
        }
    });

    app.put('/user/edit', async function (req, res) {
        let fullName = req.body.fullName;
        let email = req.body.email;
        let oldPassword = req.body.oldPassword;

        const salt = await bcrypt.genSalt(10);
        let newPassword = await bcrypt.hash(req.body.newPassword, salt);

        if (fullName && email && oldPassword && newPassword) {

            if (!fullName.trim().match(fullNameRegEx)) {
                res.status(400);
                res.json("Invalid Full Name. Please only enter alphabets");
                return;
            }

            const user = await Sample.findOne({ email: email });

            if (user == null) {
                res.status(400);
                res.json("Email address not found");
                return;
            }
            else {
                const isMatch = await user.isValidPassword(oldPassword);
                if (!isMatch) {
                    res.status(400);
                    res.json({ "message": "Invalid old password!" });
                    return;
                }
            }

            if (!req.body.newPassword.trim().match(passwordRegEx)) {
                res.status(400);
                res.json("Password should be 8-14 characters long. Must contain an uppercase letter and a lowercase letter, a special character and a numeric character (0-9) ");
                return;
            }

            Sample.findOneAndUpdate({ email: email },
                { $set: { fullName: fullName, email: email, password: newPassword } },
                { new: true }, (error, doc) => {
                    console.log(doc);
                    if (error) {
                        res.json({ "message": "Update failed!" });
                        console.log("User updation failed!");
                    }
                    else {
                        res.json("Details updated successfully");
                    }
                })
        }
        else {
            res.json("Please enter all required fields");
        }
    })

}