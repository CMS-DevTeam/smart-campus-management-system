const Shedule = require("../models/shedule.model");

const getShedules = async (req, res) => {
    try {
        const shedule = await Shedule.find();
        res.status(200).json({data: shedule});
    }catch (error){
        res.status(500).json({ message: error.message });
    }
};

const createShedule = async (req, res) => {
    try {
        const shedule = await Shedule.create(req.body);
        res.status(201).json({data: shedule});
    }catch (error){
        res.status(500).json({ message: error.message });
    }
};

const getShedule = async (req, res) => {
    try {
        const {id} = req.params;
        const shedule = await Shedule.findById(id);
        res.status(201).json({data: shedule});
    }catch (error){
        res.status(500).json({ message: error.message });
    }
};

const updateShedule = async (req, res) => {
    try {
        const { id } = req.params;
        const shedule = await Shedule.findByIdAndUpdate(
            id,
            req.body,
            { new: true, runValidators: true }
        );

        if (!shedule) {
            return res.status(404).json({ message: "Shedule not found" });
        }

        const updateShedule = await Shedule.findById(id);
        res.status(200).json({ data: updateShedule });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};


const deleteShedule = async (req, res) => {
    try {
        const { id } = req.params;
        const shedule = await Shedule.findByIdAndDelete(id);

        if (!shedule) {
            return res.status(404).json({ message: "Shedule not found" });
        }
        res.status(200).json({ message: "Shedule deleted successfully" });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = {
    getShedules,
    createShedule,
    getShedule,
    updateShedule,
    deleteShedule,
};