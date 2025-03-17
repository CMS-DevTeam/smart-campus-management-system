const mongoose = require("mongoose");

const assignmentSchema = mongoose.Schema(
  {
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
