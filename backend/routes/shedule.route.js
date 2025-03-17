const express = require("express");
const router = express.Router();
const {
    getShedules,
    getShedule,
    createShedule,
    updateShedule,
    deleteShedule,
} = require("../controller/shedule.controller");

router.get("/", getShedules);
router.post("/", createShedule);
router.get("/:id", getShedule);
router.put("/:id", updateShedule);
router.delete("/:id", deleteShedule);

module.exports = router;