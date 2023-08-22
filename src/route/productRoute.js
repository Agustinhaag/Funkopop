const express = require("express");
const route = express.Router();
const controller = require("../controller/productController.js");
const { body } = require("express-validator");

route.get("/", controller.mostrar);

const validarProduct = [
  body("name")
    .notEmpty()
    .withMessage("El campo nombre no puede estar vacio"),
  body("codigo")
    .notEmpty()
    .withMessage("El codigo no puede estar vacio"),
  body("categoria_id")
    .notEmpty()
    .withMessage("El campo categoria no puede estar vacio"),
  body("precio")
    .notEmpty()
    .withMessage("El precio no puede estar vacio"),
  body("descripcion")
    .notEmpty()
    .withMessage("El campo descripcion no puede estar vacio"),
];

const multer = require("multer");
const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, "public/Uploads"),
  filename: (req, file, cb) => cb(null, Date.now() + "-" + file.originalname),
});

const cargar = multer({ storage });

route.get("/create", controller.create)
route.post("/", cargar.single("image"), validarProduct, controller.guardar);

route.get("/edit/:id", controller.edit);
route.put("/", cargar.single("image"), validarProduct, controller.update);

route.delete("/:id", controller.destroy)

module.exports = route;
