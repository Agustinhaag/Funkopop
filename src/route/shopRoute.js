const express = require("express");
const route = express.Router();
const controller = require("../controller/shopController.js");

route.get("/", controller.shop);

module.exports = route;
