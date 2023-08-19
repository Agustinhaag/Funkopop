const service = require("../service/contactService.js");
const { validationResult } = require("express-validator");

const contact = (req, res) => {
  res.render("contact/contact.ejs", {
    values: {},
    layout: "layout/private.ejs",
  });
};

const sucess = (req, res) => {
  res.render("contact/sucess.ejs", {
    layout: "layout/private.ejs",
  });
};

const postContact = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    res.render("contact/contact.ejs", {
      values: req.body,
      errors: errors.array(),
      layout: "layout/private.ejs",
    });
  } else {
    const result = await service.postEmail(req.body);
    res.redirect("/contact/sucess");
  }
};

module.exports = {
  contact,
  postContact,
  sucess,
};
