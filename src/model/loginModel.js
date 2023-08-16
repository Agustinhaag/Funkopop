const { conect } = require("../config/conect.js");

const createRegister = async (body) => {
  const { name, apellido, email, password } = body;
  try {
    const [rows] = await conect.query("INSERT INTO usuarios SET ?", {
      name,
      apellido,
      email,
      password,
    });
    return rows;
  } catch (error) {
    if (error.code === "ER_DUP_ENTRY") {
      return "registro existente";
    }
    throw error;
  } finally {
    conect.releaseConnection();
  }
};

const postLogin = async (req) => {
  const { email } = req.body;
  try {
      const [row] = await conect.query("SELECT * FROM usuarios WHERE ?", { email });
      return row
  } catch (error) {
    if (error.code === "ER_DUP_ENTRY") {
      return "registro existente";
    }
    throw error;
  } finally {
    conect.releaseConnection();
  }
};

module.exports = {
    createRegister,
    postLogin,
};
