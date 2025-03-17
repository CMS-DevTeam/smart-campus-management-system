const mongoose = require("mongoose");

const resourceSchema = mongoose.Schema(
  {
    resourceName: {
      type: String,
      required: [true, "please enter Resource Name"],
    },
    type: {
      type: String,
      required: [true, "please enter Type"],
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

const Resource = mongoose.model("Resource", resourceSchema);

module.exports = Resource;
