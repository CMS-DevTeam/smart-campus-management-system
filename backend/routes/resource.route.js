const express = require("express");
const router = express.Router();
const {
  getResources,
  getResource,
  createResource,
  updateResource,
  deleteResource,
} = require("../controller/resources.controller");

router.get("/", getResources);
router.post("/", createResource);
router.get("/:id", getResource);
router.put("/:id", updateResource);
router.delete("/:id", deleteResource);

module.exports = router;