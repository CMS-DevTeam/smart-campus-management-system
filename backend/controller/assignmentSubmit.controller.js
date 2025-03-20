const multer = require("multer");
const path = require("path");
const fs = require("fs");
const AssignmentSubmit = require("../models/assignmentSubmit.model");

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
        cb(null, Date.now() + "-" + file.originalname); // Unique filenames
    },
});

// Initialize Multer upload middleware
const uploadMiddleware = multer({ storage }).single("file");

// Middleware wrapper to handle errors in async calls
const upload = (req, res, next) => {
    uploadMiddleware(req, res, (err) => {
        if (err) {
            return res.status(500).json({ message: "File upload error", error: err.message });
        }
        next();
    });
};

// Upload and save assignment
const saveAssignmentSubmit = async (req, res) => {
    try {
        if (!req.file) return res.status(400).json({ message: "No file uploaded" });

        const newAssignmentSubmit = new AssignmentSubmit({
            filename: req.file.filename,
            path: req.file.path,
        });

        await newAssignmentSubmit.save();
        res.status(201).json({ message: "File uploaded successfully", file: newAssignmentSubmit });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Get all submitted assignments
const getAssignmentSubmit = async (req, res) => {
    try {
        const assignmentSubmit = await AssignmentSubmit.find();
        res.json(assignmentSubmit);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Download an assignment file
const downloadAssignmentSubmit = async (req, res) => {
    try {
        const assignmentSubmit = await AssignmentSubmit.findById(req.params.id);
        if (!assignmentSubmit) return res.status(404).json({ message: "File not found" });

        res.download(assignmentSubmit.path);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = {
    saveAssignmentSubmit,
    getAssignmentSubmit,
    downloadAssignmentSubmit,
    upload
};
