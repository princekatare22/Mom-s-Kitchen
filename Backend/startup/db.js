const mongoose = require("mongoose");
const config = require("config");
const winston = require("winston");

const mongoDbUrl = config.get("mongoDb");
module.exports = function () {
  mongoose.connect(mongoDbUrl).then(function () {
    console.log("Connected to DB");
  });
};
