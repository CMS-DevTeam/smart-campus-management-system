const Announcement = require("../models/announcement.model");

const getAnnouncements = async (req, res) => {
    try {
        const announcement = await Announcement.find();
        res.status(200).json({data: announcement});
    }catch (error){
        res.status(500).json({ message: error.message });
    }
};

const createAnnouncement = async (req, res) => {
    try {
        const announcement = await Announcement.create(req.body);
        res.status(201).json({data: announcement});
    }catch (error){
        res.status(500).json({ message: error.message });
    }
};

const getAnnouncement = async (req, res) => {
    try {
        const {id} = req.params;
        const announcement = await Announcement.findById(id);
        res.status(201).json({data: announcement});
    }catch (error){
        res.status(500).json({ message: error.message });
    }
};

const updateAnnouncement = async (req, res) => {
    try {
        const {id} = req.params;
        const announcement = await Announcement.findByIdAndUpdate(
            id,
            req.body,
            {
                new: true, runValidators: true
            }
        );
        if (!announcement){
            return res.status(404).json({message: "Announcement not found"});
        }

        const updateAnnouncement = await Announcement.findById(id);
        res.status(200).json({ data: updateAnnouncement });

    }catch (error){
        res.status(500).json({ message: error.message });
    }
};

const deleteAnnouncement = async (req, res) => {
    try {
        const { id } = req.params;
        const announcement = await Announcement.findByIdAndDelete(id);

        if (!announcement) {
            return res.status(404).json({ message: "Announcement not found" });
        }
        res.status(200).json({ message: "Announcement deleted successfully" });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = {
    getAnnouncements,
    getAnnouncement,
    createAnnouncement,
    updateAnnouncement,
    deleteAnnouncement,
};
