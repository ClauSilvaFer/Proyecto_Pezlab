const mongoose = require("mongoose");

const UsuarioSchema = new mongoose.Schema({
    user: { type: String, required: true },
    password: { type: String, required: true },
    name: { type: String, required: true },
    
});

const Usuario= mongoose.model("usuario", UsuarioSchema); 
module.exports = Usuario;