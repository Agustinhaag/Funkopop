const express = require("express");
const route = express.Router();
const controller = require("../controller/homeController.js");

route.get("/", controller.home);

module.exports = route;
