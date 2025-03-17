const express = require("express");
const router = express.Router();
const {
  getResults,
  getResult,
  createResult,
  updateResult,
  deleteResult,
} = require("../controller/result.controller");

router.get("/", getResults);
router.post("/", createResult);
router.get("/:id", getResult);
router.put("/:id", updateResult);
router.delete("/:id", deleteResult);

module.exports = router;