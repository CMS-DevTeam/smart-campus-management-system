const express = require("express");
const router = express.Router();
const {
    getEvents,
    getEvent,
    createEvent,
    updateEvent,
    deleteEvent,
} = require("../controller/event.controller");

router.get("/", getEvents);
router.post("/", createEvent);
router.get("/:id", getEvent);
router.put("/:id", updateEvent);
router.delete("/:id", deleteEvent);

module.exports = router;