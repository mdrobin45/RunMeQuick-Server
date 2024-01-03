const express = require("express");
const app = express();
const port = process.env.PORT || 3000;
const cors = require("cors");
const database = require("./src/database");
const authRoute = require("./src/routes/authentication");
require("dotenv").config();

// Use middleware
app.use(
   cors({
      credentials: true,
      origin: process.env.LOCAL_SITE,
   })
);

app.use(express.json());

// Database connection
database();

// application routes
app.get("/", (req, res) => {
   res.send("Server is running");
});
app.use("/auth", authRoute);

// Listen server
app.listen(port, () => {
   console.log(`Server is running in ${port}`);
});
