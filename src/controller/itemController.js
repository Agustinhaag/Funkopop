const service = require("../service/productService");

const item = async (req, res) => {
  const categorias = await service.findAll();
  const productos = await service.mostrar();
  const producto = await service.findOne(req.params);
  res.render("item/item", {
    producto,
    categorias,
    productos,
    layout: "layout/private",
  });
};

const mostrar = (req, res) => {
  res.render("item/carrito", { layout: "layout/private" });
};

const carrito = async (req, res) => {
  const result = await service.mostrar();
  await res.json(result);
};
module.exports = {
  item,
  carrito,
  mostrar,
};
