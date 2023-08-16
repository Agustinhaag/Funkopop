const express = require("express");
const route = express.Router();
const { body } = require("express-validator");
const { conect } = require("../config/conect.js");
const controller = require("../controller/loginController.js");

const validarRegister = [
  body("name").notEmpty().withMessage("El campo nombre no puede estar vacio"),
  body("apellido")
    .notEmpty()
    .withMessage("El campo apellido no puede estar vacio"),
  body("email")
    .isEmail()
    .withMessage("Ingrese un email válido")
    .bail()
    .custom((value) => {
      return new Promise((resolve, reject) => {
        sql = "SELECT * FROM usuarios WHERE email = ?";
        where = [value];
        conect.query(sql, where).then((row) => {
          if (row[0].length != 0) {
            return reject();
          }
          return resolve();
        });
      });
    })
    .withMessage("email duplicado"),
  body("password")
    .isStrongPassword({
      minLength: 8,
      minSymbols: 1,
      minNumbers: 1,
      minUppercase: 1,
      minLowercase: 1,
    })
    .withMessage("la contraseña debe tener...")
    .bail()
    .custom((value, { req }) => value === req.body.password2) //aca comparamos si la primer password (value) es igual a la segunda
    .withMessage("Las contraseñas no coinciden"),
  body("check")
    .notEmpty()
    .withMessage("Debe aceptar los términos y condiciones"),
];

route.get("/register", controller.register);
route.post("/register", validarRegister, controller.createRegister);

route.get("/login", controller.login);
route.post("/login", controller.postLogin)

route.get("/logout", controller.logout);

module.exports = route;
