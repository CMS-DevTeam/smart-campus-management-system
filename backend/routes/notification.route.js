const express = require("express");
const router = express.Router();
const {
    getNotifications,
    getNotification,
    createNotification,
    updateNotification,
    deleteNotification,
} = require("../controller/notification.controller");

router.get("/", getNotifications);
router.post("/", createNotification);
router.get("/:id", getNotification);
router.put("/:id", updateNotification);
router.delete("/:id", deleteNotification);

module.exports = router;