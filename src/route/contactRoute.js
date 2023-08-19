const express = require("express");
const route = express.Router();
const { body } = require("express-validator");
const contactController = require("../controller/contactController.js");

const validarContact = [
  body("name").notEmpty().withMessage("El campo nombre no puede estar vacio"),
  body("surname").notEmpty().withMessage("El campo apellido no puede estar vacio"),
  body("email").isEmail().withMessage("Ingrese un email válido"),
  body("phone")
    .notEmpty()
    .withMessage("El campo teléfono no puede estar vacío"),
  body("message")
    .notEmpty()
    .withMessage("El campo mensaje no puede estar vacío")
    .bail()
    .custom(value => {
      if (value.trim() === '') {
        throw new Error('El campo mensaje no puede contener solo espacios en blanco');
      }
      return true
    }),
];

route.get("/", contactController.contact);
route.post("/", validarContact, contactController.postContact);

route.get("/sucess", contactController.sucess);

module.exports = route;
