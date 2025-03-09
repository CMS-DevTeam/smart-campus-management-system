const mongoose = require("mongoose");

const lecturerSchema = mongoose.Schema(
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
    role: {
      type: String,
      required: [true, "please enter role"],
    },
    designation: {
      type: String,
      required: [true, "please enter designation"],
    },
    leturerType: {
      type: String,
      required: [true, "please enter Lecturer Type"],
    },
    programe: {
      type: String,
      required: [true, "please enter programe"],
    },
    module: {
      type: String,
      required: [true, "please enter module"],
    },
    academicQualification: {
      type: String,
      required: false,
    },
    otherQualification: {
        type: String,
        required: false,
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

const Lecturer = mongoose.model("Lecturer", lecturerSchema);

module.exports = Lecturer;
