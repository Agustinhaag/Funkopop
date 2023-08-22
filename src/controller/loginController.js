const bcryptjs = require("bcryptjs");
const { validationResult } = require("express-validator");
const serviceLogin = require("../service/loginService.js");

const register = (req, res) => {
  res.render("login/register.ejs", { values: {}, errors:[] });
};
const createRegister = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.render("login/register.ejs", {
      values: req.body,
      errors: errors.array(),
    });
  }
  await serviceLogin.createRegister(req.body);
  res.redirect("/login");
};

const login = (req, res) => {
  res.render("login/login.ejs", { values: {} });
};

const postLogin = async (req, res) => {
  const row = await serviceLogin.postLogin(req);
  if (row.length == 0) {
    return res.render("login/login.ejs", {
      values: req.body,
      errors: [{ msg: "El email o contraseña son incorrectos" }],
    });
  } else if (!bcryptjs.compareSync(req.body.password, row[0].password)) {
    return res.render("login/login.ejs", {
      values: req.body,
      errors: [{ msg: "El email o contraseña son incorrectos" }],
    });
  } else {
    req.session.user_id = row[0].id;
    res.redirect("/product");
  }
};

const logout = (req, res) => {
  req.session = null;
  res.redirect("/");
};

module.exports = {
  register,
  logout,
  login,
  createRegister,
  postLogin,
};
