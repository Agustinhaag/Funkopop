const modelo = require("../model/productModel.js");
const fs = require("fs");

const guardar = async (body,file) => {
  const result = await modelo.guardar(body, file);
  return result;
}

const mostrar = async () => {
  const productos = await modelo.mostrar();
  return productos;
};

const update = async (body, file) => {
  const row = await modelo.findOne(body);
  if (file && row[0].image) {
    if (fs.existsSync(`public/Uploads/${row[0].image}`)) {
      fs.unlinkSync(`public/Uploads/${row[0].image}`);
    }
  }
  body.image = row[0].image;
  if (file) {
    body.image = file.filename;
  }

  const result = await modelo.update(body);
  return result;
};

const findOne = async (params) => {
  const result = await modelo.findOne(params);
  if (result.length > 0) {
    return result[0];
  }
};

const findAll = async () => {
  const result = await modelo.findAll();
  return result;
};

const destroy = async (params) => {
   const row = await modelo.findOne(params);
   if (row[0].image) {
     if (fs.existsSync(`public/uploads/${row[0].image}`)) {
       fs.unlinkSync(`public/uploads/${row[0].image}`);
     }
   }
  const result = await modelo.destroy(params)
  return result
}

module.exports = {
  update,
  findOne,
  findAll,
  mostrar,
  destroy,
  guardar,
};
