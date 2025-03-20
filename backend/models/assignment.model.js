const mongoose = require("mongoose");

const assignmentSchema = mongoose.Schema(
  {
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
      type: String,
      required: false,
    },
  },
  {
    timestamps: true,
  }
);

const Assignment = mongoose.model("Assignment", assignmentSchema);

module.exports = Assignment;
