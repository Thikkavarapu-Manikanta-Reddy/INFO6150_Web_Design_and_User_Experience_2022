const mongoose = require("mongoose");
require("dotenv").config();
mongoose.Promise = global.Promise;

const Schema = mongoose.Schema;

let connection = {};

let signupSchema = {
  emailId: {
    type: String,
    required: true,
    unique: true,
  },
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    required: true,
  },
  university: {
    type: String,
    required: true,
  },
};

let eventSchema = {
  emailId: { type: String },
  id: { type: String, required: true },
  title: { type: String, required: true },
  type: { type: String, required: true },
  description: { type: String, required: true },
  ticketCount: { type: Number, required: true },
  dateAndTime: { type: String, required: true },
  dateAndTimeObj: { type: Object, required: true },
  location: { type: String, required: true },
  status: { type: String },
};

let userSelectedEventSchema = {
  emailId: { type: String, required: true },
  event: [
    {
      id: { type: String, required: true },
      title: { type: String, required: true },
      type: { type: String, required: true },
      description: { type: String, required: true },
      ticketCount: { type: Number, required: true },
      dateAndTime: { type: String, required: true },
      dateAndTimeObj: { type: Object, required: true },
      location: { type: String, required: true },
    },
  ],
};

//const userSchema = new Schema(schema, { collection: "User", timestamps: true });
const signUpSchema = new Schema(signupSchema, {
  collection: "SignUpEvent",
  timestamps: true,
});

//for admin
const userEventsSchema = new Schema(eventSchema, {
  collection: "userEvents",
  timestamps: true,
});

//for student replicate admin
const studentEventSchema = new Schema(eventSchema, {
  collection: "bookedStudentEvents",
  timestamps: true,
});

connection.getUserCollectionSignUp = async () => {
  try {
    return (
      await mongoose.connect(process.env.DATABASE, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      })
    ).model("SignUpEvent", signUpSchema);
  } catch (err) {
    let error = new Error("Could not connect to database");
    error.status = 500;
    throw error;
  }
};

connection.getStudentEvents = async () => {
  try {
    return (
      await mongoose.connect(process.env.DATABASE, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      })
    ).model("bookedStudentEvents", studentEventSchema);
  } catch (err) {
    let error = new Error("Could not connect to database");
    error.status = 500;
    throw error;
  }
};
connection.postEvents = async () => {
  try {
    return (
      await mongoose.connect(process.env.DATABASE, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      })
    ).model("userEvents", userEventsSchema);
  } catch (err) {
    let error = new Error("Could not connect to database");
    error.status = 500;
    throw error;
  }
};
connection.postStudentEvents = async () => {
  try {
    return (
      await mongoose.connect(process.env.DATABASE, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      })
    ).model("bookedStudentEvents", studentEventSchema);
  } catch (err) {
    let error = new Error("Could not connect to database");
    error.status = 500;
    throw error;
  }
};

connection.deleteEvents = async () => {
  try {
    return (
      await mongoose.connect(process.env.DATABASE, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      })
    ).model("userEvents", userEventsSchema);
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
    ).model("userEvents", userEventsSchema);
  } catch (err) {
    let error = new Error("Could not connect to database");
    error.status = 500;
    throw error;
  }
};
module.exports = connection;
