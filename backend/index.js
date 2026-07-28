const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();

const deviceRoutes = require("./routes/deviceRoutes");
const alertRoutes = require("./routes/alertRoutes"); // ✅ Added

const app = express();

app.use(cors());
app.use(express.json());

// Connect to MongoDB
mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => console.log("✅ MongoDB Connected"))
  .catch((err) => console.error("❌ MongoDB Connection Error:", err));

// Test Route
app.get("/", (req, res) => {
  res.send("🚀 AI-NOC Backend is Running Successfully!");
});

// Existing Device API
app.use("/api/devices", deviceRoutes);

// ✅ Added Alert API
app.use("/api/alerts", alertRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`✅ Server is running on http://localhost:${PORT}`);
});