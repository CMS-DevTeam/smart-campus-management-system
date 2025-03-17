const express = require("express");
const router = express.Router();
const {
  getAcademicOfficers,
  getAcademicOfficer,
  createAcademicOfficer,
  updateAcademicOfficer,
  deleteAcademicOfficer,
} = require("../controller/academicOfficer.controller");

router.get("/", getAcademicOfficers);
router.post("/", createAcademicOfficer);
router.get("/:id", getAcademicOfficer);
router.put("/:id", updateAcademicOfficer);
router.delete("/:id", deleteAcademicOfficer);

module.exports = router;