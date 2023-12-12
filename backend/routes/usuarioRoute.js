const express = require("express");
const { createUsuario, getUsuario, deleteUsuario, getUsuarios, updateUsuario } = require("../controllers/usuarioController.js");

const routerUser = express.Router();
routerUser.post("/api/usuario/create", createUsuario);
routerUser.get("/api/usuarios", getUsuarios);
routerUser.get("/api/usuarios/:idUsuario", getUsuario);
routerUser.delete("/api/usuario/:idUsuario", deleteUsuario);
routerUser.put("/api/usuario/:idUsuario", updateUsuario);

module.exports = routerUser;