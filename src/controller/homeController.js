const service = require("../service/productService");

const home = async (req, res) => {
  const categorias = await service.findAll();
  const productos = await service.mostrar();
  res.render("home/home.ejs", {
    categorias,
    productos,
    layout: "layout/private.ejs",
  });
};

module.exports = {
  home,
};
