const express = require("express");
const { 
    createUsuario,
    getUsuario,
    deleteUsuario,
    getUsuarios,
    updateUsuario,
    login,
} = require("../controllers/usuarioController");

const routerUser = express.Router();
routerUser.post("/api/usuario/create", createUsuario);
routerUser.get("/api/usuarios", getUsuarios);
routerUser.get("/api/usuarios/:idUsuario", getUsuario);
routerUser.delete("/api/usuario/:idUsuario", deleteUsuario);
routerUser.put("/api/usuario/:idUsuario", updateUsuario);
routerUser.post("/api/usuarios/login", login);

module.exports = routerUser;