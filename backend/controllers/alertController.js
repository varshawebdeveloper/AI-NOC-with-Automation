

const Alert = require("../models/Alert");

// GET - Get all alerts
const getAlerts = async (req, res) => {
  try {
    const alerts = await Alert.find();

    res.json(alerts);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};


// POST - Add new alert
const addAlert = async (req, res) => {
  try {
    const alert = await Alert.create(req.body);

    res.status(201).json(alert);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};


// PUT - Update alert
const updateAlert = async (req, res) => {
  try {
    const alert = await Alert.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
        runValidators: true,
      }
    );

    if (!alert) {
      return res.status(404).json({
        message: "Alert not found",
      });
    }

    res.json(alert);

  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};


// DELETE - Delete alert
const deleteAlert = async (req, res) => {
  try {
    const alert = await Alert.findByIdAndDelete(req.params.id);

    if (!alert) {
      return res.status(404).json({
        message: "Alert not found",
      });
    }

    res.json({
      message: "Alert deleted successfully",
    });

  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};


module.exports = {
  getAlerts,
  addAlert,
  updateAlert,
  deleteAlert,
};