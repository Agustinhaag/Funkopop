const { conect } = require("../config/conect.js");

const guardar = async (body, file) => {
    let stock = body.stock ? body.stock : null;
    let descuento = body.descuento ? body.descuento : null;
    let cuotas = body.cuotas ? body.cuotas : null;
  let licencia = body.licencia ? body.licencia : null;
   let image = file ? file.filename : null;
    const { name, descripcion, precio, codigo, categoria_id } = body;
  try {
    const [result] = await conect.query("INSERT INTO productos SET ?", { name, descripcion, precio, codigo, image, categoria_id, stock, descuento, cuotas, licencia })
    return result;
  } catch (error) {
    if (error.code === "ER_DUP_ENTRY") {
      return "registro existente";
    }
    throw error
  } finally {
    conect.releaseConnection()
  }
}

const mostrar = async () => {
  try {
    const [result] = await conect.query("SELECT * FROM productos");
    return result;
  } catch (error) {
    throw error;
  } finally {
    conect.releaseConnection();
  }
};

const findOne = async (params) => {
  const { id } = params;
  try {
    const [rows] = await conect.query("SELECT * FROM productos WHERE ?", {
      id,
    });
    return rows;
  } catch (error) {
    throw error;
  } finally {
    conect.releaseConnection();
  }
};

const update = async (body) => {

  let stock = body.stock ? body.stock : null;
  let descuento = body.descuento ? body.descuento : null;
  let cuotas = body.cuotas ? body.cuotas : null;
  let licencia = body.licencia ? body.licencia : null;
  const {
    id,
    name,
    descripcion,
    precio,
    codigo,
    image,
    categoria_id,
  } = body;
  try {
    const [row] = await conect.query("UPDATE productos SET ? WHERE ?", [
      {
        name,
        descripcion,
        categoria_id,
        codigo,
        precio,
        image,
        licencia,
        stock,
        descuento,
        cuotas,
      },
      { id },
    ]);
    return row;
  } catch (error) {
    throw error;
  } finally {
    conect.releaseConnection();
  }
};

const findAll = async () => {
  try {
    const [result] = await conect.query("SELECT * FROM categorias");
    return result;
  } catch (error) {
    throw error;
  } finally {
    conect.releaseConnection();
  }
};

const destroy = async (params) => {
  const { id } = params;
  try {
    const [row] = await conect.query("DELETE FROM productos WHERE ?", { id })
    return row
  } catch (error) {
    throw error
  } finally {
    conect.releaseConnection()
  }
}

module.exports = {
  update,
  findOne,
  findAll,
  mostrar,
  destroy,
  guardar,
};
