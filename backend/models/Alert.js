const mongoose = require("mongoose");

const alertSchema = new mongoose.Schema(
  {
    deviceName: {
      type: String,
      required: true,
    },

    alertType: {
      type: String,
      required: true,
    },

    severity: {
      type: String,
      default: "Low",
    },

    message: {
      type: String,
      required: true,
    },

    status: {
      type: String,
      default: "Active",
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Alert", alertSchema);