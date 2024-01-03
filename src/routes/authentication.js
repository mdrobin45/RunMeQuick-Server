const express = require("express");
const userRegistration = require("../controllers/authentication/registration");
const userLogin = require("../controllers/authentication/login");
const authRoute = express.Router();

// User login
authRoute.post("/login", userLogin);

// User registration
authRoute.post("/registration", userRegistration);

// Export routes
module.exports = authRoute;
