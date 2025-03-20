const express = require("express");
const router = express.Router();
const {
  getLecturers,
  getLecturer,
  createLecturer,
  updateLecturer,
  deleteLecturer,
} = require("../controller/lecturer.controller");

router.get("/", getLecturers);
router.post("/", createLecturer);
router.get("/:id", getLecturer);
router.put("/:id", updateLecturer);
router.delete("/:id", deleteLecturer);

module.exports = router;