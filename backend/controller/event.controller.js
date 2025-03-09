const Event = require("../models/event.model.js");

const getEvents = async (req, res) => {
    try {
        const event = await Event.find();
        res.status(200).json({data: event});
    }catch (error){
        res.status(500).json({ message: error.message });
    }
};

const createEvent = async (req, res) => {
    try {
        const event = await Event.create(req.body);
        res.status(201).json({data: event});
    }catch (error){
        res.status(500).json({ message: error.message });
    }
};

const getEvent = async (req, res) => {
    try {
        const {id} = req.params;
        const event = await Event.findById(id);
        res.status(201).json({data: event});
    }catch (error){
        res.status(500).json({ message: error.message });
    }
};

const updateEvent = async (req, res) => {
    try {
        const {id} = req.params;
        const event = await Event.findByIdAndUpdate(
            id,
            req.body,
            {
                new: true, runValidators: true
            }
        );
        if (!event){
            return res.status(404).json({message: "Event not found"});
        }

        const updateEvent = await Event.findById(id);
        res.status(200).json({ data: updateEvent });

    }catch (error){
        res.status(500).json({ message: error.message });
    }
};

const deleteEvent = async (req, res) => {
    try {
        const { id } = req.params;
        const event = await Event.findByIdAndDelete(id);

        if (!event) {
            return res.status(404).json({ message: "Event not found" });
        }
        res.status(200).json({ message: "Event deleted successfully" });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = {
    getEvents,
    createEvent,
    getEvent,
    updateEvent,
    deleteEvent,
};