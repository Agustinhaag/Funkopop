const { validationResult } = require("express-validator");
const service = require("../service/productService.js");

const create = async (req, res) => {
  const categorias = await service.findAll();
  res.render("product/create",{values:{}, categorias})
}

const guardar = async (req, res) => {
      const categorias = await service.findAll();
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.render("product/create", {
          values: req.body,
          categorias,
          errors: errors.array(),
        });
      }
      await service.guardar(req.body, req.file);
      res.redirect("/product");
}

const mostrar = async (req, res) => {
  const categorias = await service.findAll();
  const productos = await service.mostrar();
  res.render("product/product.ejs", { productos, categorias });
};

const edit = async (req, res) => {
  const categorias = await service.findAll();
  const productos = await service.findOne(req.params);
  res.render("product/edit", {
    values: productos,
    categorias,
  });
};

const update = async (req, res) => {
  const categorias = await service.findAll();
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.render("product/edit", {
      values: req.body,
      categorias,
      errors: errors.array(),
    });
  }
  await service.update(req.body, req.file);
  res.redirect("/product");
};

const destroy = async (req,res) => {
  await service.destroy(req.params)
  res.redirect("/product")
}

module.exports = {
  edit,
  update,
  mostrar,
  destroy,
  create,
  guardar,
};
