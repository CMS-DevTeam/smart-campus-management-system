const mongoose = require("mongoose");
const studentSchema = mongoose.Schema(
  {
    firstName: {
      type: String,
      required: [true, "please enter first name"],
    },
    lastName: {
      type: String,
      required: [true, "please enter last name"],
    },
    gender: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: [true, "please enter password"],
    },
    phoneNumber: {
      type: String,
      required: [true, "please enter phone number"],
    },
    email: {
      type: String,
      required: [true, "please enter email"],
    },
    dateOfBirth: {
      type: Date,
      required: [true, "please enter date of birth"],
    },
    nic: {
      type: String,
      required: [true, "please enter NIC"],
    },
    address: {
      type: String,
      required: [true, "please enter address"],
    },
    country: {
      type: String,
      required: [true, "please enter country"],
    },
    role: {
        type: String,
        required: [true, "please enter role"],
    },
    programme: {
        type: String,
        required: [true, "please enter programme"],
    },
    optionalModule: {
        type: String,
        required: [true, "please enter optional module"],
    },
    guardian: {
      type: String,
      required: [true, "please enter guardian name"],
    },
    immediateContactNumber: {
      type: String,
      required: [true, "please enter immediateContactNumber"],
    },
    relationship: {
      type: String,
      required: [true, "please enter relationship"],
    },
    image: {
      type: String,
      required: false,
    },
  },
  {
    timestamps: true,
  }
);


const Student = mongoose.model(
  "Student",
  studentSchema
);

module.exports = Student;
