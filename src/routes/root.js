const express = require("express");
const saveHistory = require("../controllers/history/saveHistory");
const getHistory = require("../controllers/history/getHistory");
const rootRoute = express.Router();

rootRoute.get("/", (req, res) => {
   res.send("Server is running");
});

// Get history
rootRoute.get("/get-history", getHistory);

// Save history
rootRoute.post("/save-history", saveHistory);

// Export route
module.exports = rootRoute;
