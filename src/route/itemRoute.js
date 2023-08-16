const express = require("express");
const route = express.Router();
const controller = require("../controller/itemController.js");

route.get("/api/producto", controller.carrito);

route.get("/carrito", controller.mostrar)

route.get("/:id", controller.item);

module.exports = route;
