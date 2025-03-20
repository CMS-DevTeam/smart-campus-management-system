const mongoose = require("mongoose");

const assignmentSchema = mongoose.Schema(
  {
<<<<<<< HEAD
    assignmentName: {
      type: String,
      required: [true, "please enter Title"],
    },
    courseName: {
      type: String,
      required: [true, "please enter description"],
    },
    moduleDate: {
      type: Date,
      required: true,
    },
    dueDate: {
      type: String,
      required: true,
    },
    description: {
=======
    title: {
      type: String,
      required: [true, "please enter Title"],
    },
    decription: {
      type: String,
      required: [true, "please enter description"],
    },
    dueDate: {
      type: Date,
      required: true,
    },
    grade: {
>>>>>>> main
      type: String,
      required: false,
    },
  },
  {
    timestamps: true,
  }
);

const Assignment = mongoose.model("Assignment", assignmentSchema);

<<<<<<< HEAD
module.exports = Assignment;
=======
module.exports = Assignment;
>>>>>>> main
