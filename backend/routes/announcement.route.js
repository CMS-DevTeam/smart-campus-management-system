const express = require("express");
const router = express.Router();
const {
    getAnnouncements,
    getAnnouncement,
    createAnnouncement,
    updateAnnouncement,
    deleteAnnouncement,
} = require("../controller/announcement.controller");

router.get("/", getAnnouncements);
router.post("/", createAnnouncement);
router.get("/:id", getAnnouncement);
router.put("/:id", updateAnnouncement);
router.delete("/:id", deleteAnnouncement);

module.exports = router;