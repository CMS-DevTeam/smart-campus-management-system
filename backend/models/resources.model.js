const mongoose = require("mongoose");

const resourceSchema = mongoose.Schema(
  {
    category: {
      type: String,
      required: [true, "please enter Resource Name"],
    },
    name: {
      type: String,
      required: [true, "please enter Type"],
    },
    reservationDate: {
      type: String,
      required: false,
    },
    reservationTime: {
      type: String,
      required: false,
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

const Resource = mongoose.model("Resource", resourceSchema);

module.exports = Resource;