const SystemAdministrator = require("../models/systemAdministrator.model");

const getSystemAdministrators = async (req, res) => {
  try {
    const systemAdministrators = await SystemAdministrator.find();
    res.status(200).json({ data: systemAdministrators });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const createSystemAdministrator = async (req, res) => {
  try {
    const systemAdministrator = await SystemAdministrator.create(req.body);
    res.status(201).json({ data: systemAdministrator });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
