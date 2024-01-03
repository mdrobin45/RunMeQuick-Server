const express = require("express");
const authRoute = express.Router();

// User registration
authRoute.post("/registration");

// Export routes
module.exports = authRoute;
