const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const mongoose = require("mongoose");
const router = require("./app/routes/routes");
//const url ="mongodb://localhost:27017/userDB1";
const app = express();

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use("/user", router);

app.get("/hello", (req, res) => {
  res.send("hello");
  alert("hhh");
});

// mongoose.connect(url,{useNewUrlParser : true});
// const con = mongoose.connection;

// con.on('open',function(){
//     console.log("Connected to Server...")
// })

app.listen(8000);
console.log("Server Started at port 8000");
module.exports = app;
