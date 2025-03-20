const mongoose = require("mongoose");

const assignmentSubmitSchema = new mongoose.Schema({
    filename: { type: String, required: true },
    path: { type: String, required: true },
    uploadedAt: { type: Date, default: Date.now },
});

const AssignmentSubmit = mongoose.model("AssignmentSubmit", assignmentSubmitSchema);

module.exports = AssignmentSubmit;
