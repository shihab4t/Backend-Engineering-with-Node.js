const express = require("express");
const mongoose = require("mongoose");
const { MONGODB_URI } = require("./utils/config.util");

const app = express();

mongoose
    .connect(MONGODB_URI)
    .then(() => console.log("Connected to MongoDB!"))
    .catch((err) => console.error("MongoDB Connection Failed"));

require("./middlewares").beforeRoutes(app);
require("./routes")(app);
require("./middlewares").afterRoutes(app);

module.exports = app;
