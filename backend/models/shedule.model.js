const mongoose = require("mongoose");
const sheduleSchema = mongoose.Schema(
  {
    classRoom: {
      type: String,
      required: [true, "please enter classRoom"],
    },
    date: {
      type: Date,
      required: [true, "please enter date"],
    },
    startTime: {
        type: String,
        required: [true, "please enter startTime"],
        match: [/^([01]\d|2[0-3]):([0-5]\d):([0-5]\d)$/, "Please enter a valid time in HH:mm:ss format"],
      },
    endTime: {
        type: String,
        required: [true, "please enter startTime"],
        match: [/^([01]\d|2[0-3]):([0-5]\d):([0-5]\d)$/, "Please enter a valid time in HH:mm:ss format"],
      },
    subject: {
        type: String,
        required: [true, "please enter subject"],
      },
  },
  {
    timestamps: true,
  }
);


const Shedule = mongoose.model(
  "Shedule",
  sheduleSchema
);

module.exports = Shedule;