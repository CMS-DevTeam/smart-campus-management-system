
const express = require("express");
const {
  saveLectureMaterial,
  getLectureMaterials,
  downloadLectureMaterial,
  deleteLectureMaterial,
  upload, // Imported from the controller
} = require("../controller/lectureMaterial.controller");

const router = express.Router();

// Route for uploading a file
router.post("/upload", upload.single("file"), saveLectureMaterial);

// Route to get all lecture materials
router.get("/", getLectureMaterials);

// Route to download a specific lecture material
router.get("/download/:id", downloadLectureMaterial);

// Route to delete a specific lecture material
router.delete("/:id", deleteLectureMaterial);

module.exports = router;