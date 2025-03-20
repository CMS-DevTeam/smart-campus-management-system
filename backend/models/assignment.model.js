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

<<<<<<< HEAD
module.exports = Assignment;
=======
module.exports = Assignment;
>>>>>>> 0c1a06f5418c824d196e7ac2909bb67a4fe2903a
