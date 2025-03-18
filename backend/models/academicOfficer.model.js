const mongoose = require("mongoose");

const academicOfficerSchema = mongoose.Schema(
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
    image: {
      type: String,
      required: false,
    },
  },
  {
    timestamps: true,
  }
);

const AcademicOfficer = mongoose.model(
  "AcademicOfficer",
  academicOfficerSchema
);

module.exports = AcademicOfficer;
