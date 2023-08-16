const loginModelo = require("../model/loginModel.js")
const bcryptjs = require("bcryptjs");

const createRegister = async (body) => {
    body.password = await bcryptjs.hash(body.password,8)
    const rows = await loginModelo.createRegister(body);
    return rows
}

const postLogin = async (body)=>{
    const row = await loginModelo.postLogin(body)
    return row;
}

module.exports = {
    createRegister,
    postLogin,
}