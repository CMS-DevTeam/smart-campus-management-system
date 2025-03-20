const express = require("express");
const router = express.Router();
const {
  getAssignments,
  getAssignment,
  createAssignment,
  updateAssignment,
  deleteAssignment,
} = require("../controller/assignment.controller");

router.get("/", getAssignments);
router.post("/", createAssignment);
router.get("/:id", getAssignment);
router.put("/:id", updateAssignment);
router.delete("/:id", deleteAssignment);

module.exports = router;