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
      type: String,
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
<<<<<<< Updated upstream:backend/models/lecturer.model.js
=======
    country: {
      type: String,
      required: false,
    },
>>>>>>> Stashed changes:backend/models/student.model.js
    role: {
      type: String,
<<<<<<< Updated upstream:backend/models/lecturer.model.js
      required: [true, "please enter role"],
=======
      required: false,
>>>>>>> Stashed changes:backend/models/student.model.js
    },
    designation: {
      type: String,
      required: [true, "please enter designation"],
    },
    leturerType: {
      type: String,
<<<<<<< Updated upstream:backend/models/lecturer.model.js
      required: [true, "please enter Lecturer Type"],
=======
      required: false,
>>>>>>> Stashed changes:backend/models/student.model.js
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
