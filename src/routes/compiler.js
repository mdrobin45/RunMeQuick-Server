const express = require("express");
const { codeCompiler } = require("../controllers/compiler/compiler");
const cancelExecution = require("../controllers/compiler/cancelExecution");
const compilerRoute = express.Router();

// Cancel execution
compilerRoute.post("/cancel", cancelExecution);

// Code compiler
compilerRoute.post("/", codeCompiler);

// Export route
module.exports = compilerRoute;
