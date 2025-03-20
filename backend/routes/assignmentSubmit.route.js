const express = require("express");
const {
    saveAssignmentSubmit,
    getAssignmentSubmit,
    downloadAssignmentSubmit,
    upload // Ensure it's imported correctly
} = require("../controller/AssignmentSubmit.controller");

const router = express.Router();

// Route for uploading a file
router.post("/upload", upload, saveAssignmentSubmit);

// Route to get all submitted assignments
router.get("/", getAssignmentSubmit);

// Route to download a specific assignment file
router.get("/download/:id", downloadAssignmentSubmit);

module.exports = router;
