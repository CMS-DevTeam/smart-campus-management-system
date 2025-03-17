const mongoose = require("mongoose");
const notificationSchema = mongoose.Schema(
  {
    message: {
      type: String,
      required: [true, "please enter message"],
    },
    type: {
      type: String,
      required: [true, "please enter type"],
    },
  },
  {
    timestamps: true,
  }
);


const Notification = mongoose.model(
  "Notification",
  notificationSchema
);

module.exports = Notification;
