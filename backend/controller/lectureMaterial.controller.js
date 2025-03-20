
const multer = require("multer");
const path = require("path");
const fs = require("fs");
const LectureMaterial = require("../models/lectureMaterial.model");

// Ensure uploads directory exists
const UPLOADS_DIR = path.join(__dirname, "../uploads");
if (!fs.existsSync(UPLOADS_DIR)) {
  fs.mkdirSync(UPLOADS_DIR, { recursive: true });
}

// Configure Multer for file uploads
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, UPLOADS_DIR);
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + "-" + file.originalname); // Prevent filename collisions
  },
});

// Initialize Multer upload middleware
const upload = multer({ storage });

//  Upload PDF
const saveLectureMaterial = async (req, res) => {
  try {
    if (!req.file) return res.status(400).json({ message: "No file uploaded" });

    const newLectureMaterial = new LectureMaterial({
      filename: req.file.filename,
      path: req.file.path,
    });

    await newLectureMaterial.save();
    res.status(201).json({ message: "Lecture material uploaded successfully", file: newLectureMaterial });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

//  Get All PDFs
const getLectureMaterials = async (req, res) => {
  try {
    const materials = await LectureMaterial.find();
    res.json(materials);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

//  Download PDF
const downloadLectureMaterial = async (req, res) => {
  try {
    const material = await LectureMaterial.findById(req.params.id);
    if (!material) return res.status(404).json({ message: "Lecture material not found" });

    res.download(material.path); // Send file for download
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

//  Delete PDF
const deleteLectureMaterial = async (req, res) => {
  try {
    const material = await LectureMaterial.findById(req.params.id);
    if (!material) return res.status(404).json({ message: "Lecture material not found" });

    // Delete the file from the server
    fs.unlinkSync(material.path);

    await LectureMaterial.findByIdAndDelete(req.params.id);
    res.json({ message: "Lecture material deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Export the upload middleware and other functions
module.exports = {
  saveLectureMaterial,
  getLectureMaterials,
  downloadLectureMaterial,
  deleteLectureMaterial,
  upload,
};