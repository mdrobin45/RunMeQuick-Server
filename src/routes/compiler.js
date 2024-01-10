const express = require("express");
const codeCompiler = require("../controllers/compiler/compiler");
const compilerRoute = express.Router();

// Code compiler
compilerRoute.post("/", codeCompiler);

// Export route
module.exports = compilerRoute;
