const express = require("express");
const router = express.Router();
const {
  getSystemAdministrators,
  getSystemAdministrator,
  createSystemAdministrator,
  updateSystemAdministrator,
  deleteSystemAdministrator,
} = require("../controller/systemAdministrator.controller");

router.get("/", getSystemAdministrators);
router.post("/", createSystemAdministrator);
router.get("/:id", getSystemAdministrator);
router.put("/:id", updateSystemAdministrator);
router.delete("/:id", deleteSystemAdministrator);

module.exports = router;