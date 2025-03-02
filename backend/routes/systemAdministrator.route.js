const express = require("express");
const router = express.Router();
const {
  getSystemAdministrators,
  getSystemAdministrator,
  createSystemAdministrator,
  updateSystemAdministrator,
  deleteSystemAdministrator,
} = require("../controllers/systemAdministrator.controller");

router.get("/", getSystemAdministrators);
router.post("/", createSystemAdministrator);
router.get("/", getSystemAdministrator);
router.put("/:id", updateSystemAdministrator);
router.delete("/:id", deleteSystemAdministrator);
