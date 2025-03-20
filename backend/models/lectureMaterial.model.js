
const mongoose = require("mongoose");

const lectureMaterialSchema = new mongoose.Schema({
  filename: { type: String, required: true },
  path: { type: String, required: true },
  uploadedAt: { type: Date, default: Date.now },
});

const LectureMaterial = mongoose.model("LectureMaterial", lectureMaterialSchema);

module.exports = LectureMaterial;
