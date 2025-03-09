const mongoose = require("mongoose");

const resultSchema = mongoose.Schema(
  {
    examName: {
      type: String,
      required: [true, "please enter Exam Name"],
    },
    mark: {
      type: String,
      required: [true, "please enter Mark"],
    },
    grade: {
      type: String,
      required: false,
    },
    status: {
      type: String,
      required: false,
    },
  },
  {
    timestamps: true,
  }
);

const Results = mongoose.model("Results", resultSchema);

module.exports = Results;
