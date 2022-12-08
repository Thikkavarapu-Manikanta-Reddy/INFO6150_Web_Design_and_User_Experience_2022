const mongoose = require("mongoose");
require("dotenv").config();
mongoose.Promise = global.Promise;

const Schema = mongoose.Schema;

let connection = {};

let loginSchema = {
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
};

let eventSchema = {
  eventTitle: { type: String, required: true },
  description: { type: String, required: true },
  ticketCount: { type: String, required: true },
  DateTime: { type: String, required: true },
  Location: { type: String, required: true },
};

const userSchema = new Schema(loginSchema, {
  collection: "User",
  timestamps: true,
});

connection.getUserCollection = async () => {
  console.log(process.env.DATABASE);
  try {
    return (
      await mongoose.connect(process.env.DATABASE, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      })
    ).model("User", userSchema);
  } catch (err) {
    let error = new Error("Could not connect to database");
    error.status = 500;
    throw error;
  }
};

connection.getUserEvents = async () => {
  try {
    return (
      await mongoose.connect(process.env.DATABASE, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      })
    ).model("Events", eventSchema);
  } catch (err) {
    let error = new Error("Could not connect to database");
    error.status = 500;
    throw error;
  }
};

module.exports = connection;
