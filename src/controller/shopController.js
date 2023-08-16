const service = require("../service/productService.js");

const shop = async (req, res) => {
    const productos = await service.mostrar();
    const categorias = await service.findAll();
  res.render("shop/shop", { productos, categorias, layout:"layout/private" });
};

module.exports = {
  shop,
};
