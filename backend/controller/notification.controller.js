const Notification = require("../models/notification.model.js");

const getNotifications = async (req, res) => {
    try {
        const notification = await Notification.find();
        res.status(200).json({data: notification});
    }catch (error){
        res.status(500).json({ message: error.message });
    }
};

const createNotification = async (req, res) => {
    try {
        const notification = await Notification.create(req.body);
        res.status(201).json({data: event});
    }catch (error){
        res.status(500).json({ message: error.message });
    }
};

const getNotification = async (req, res) => {
    try {
        const {id} = req.params;
        const notification = await Notification.findById(id);
        res.status(201).json({data: notification});
    }catch (error){
        res.status(500).json({ message: error.message });
    }
};

const updateNotification = async (req, res) => {
    try {
        const {id} = req.params;
        const notification = await Notification.findByIdAndUpdate(
            id,
            req.body,
            {
                new: true, runValidators: true
            }
        );
        if (!notification){
            return res.status(404).json({message: "Notification not found"});
        }

        const updateNotification = await Notification.findById(id);
        res.status(200).json({ data: updateNotification });

    }catch (error){
        res.status(500).json({ message: error.message });
    }
};

const deleteNotification = async (req, res) => {
    try {
        const { id } = req.params;
        const notification = await Notification.findByIdAndDelete(id);

        if (!event) {
            return res.status(404).json({ message: "Notification not found" });
        }
        res.status(200).json({ message: "Notification deleted successfully" });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = {
    getNotifications,
    createNotification,
    getNotification,
    updateNotification,
    deleteNotification,
};