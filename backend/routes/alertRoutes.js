const express = require("express");

const router = express.Router();

const {
  getAlerts,
  addAlert,
  updateAlert,
  deleteAlert,
} = require("../controllers/alertController");


// GET - Get all alerts
router.get("/", getAlerts);

// POST - Add new alert
router.post("/", addAlert);

// PUT - Update alert
router.put("/:id", updateAlert);

// DELETE - Delete alert
router.delete("/:id", deleteAlert);


module.exports = router;