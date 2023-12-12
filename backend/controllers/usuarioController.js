const Usuario = require("../model/usuarioModel.js");

const createUsuario = async (req, res) => {
  var newUsuario = await Usuario.create(req.body);
  res.status(201).json(newUsuario);
};

const getUsuarios= async (req, res) => {
  var listUsuarios = await Usuario.find();
  res.status(200).json(listUsuarios);
};

const getUsuario = async (req, res) => {
  var id = req.params.idUsuario;
  var usuario = await Usuario.findById(id);
  res.status(200).json(usuario);
};

const deleteUsuario = async (req, res) => {
  var id = req.params.idUsuario;
  await Usuario.findByIdAndDelete(id);
  res.status(200).json();
};

const updateUsuario = async (req, res) => {
  var idUsuario = req.params.idUsuario;
  var dataUpdate = req.body;
  console.log({ idUsuario, dataUpdate });

  await Usuario.findByIdAndUpdate(idUsuario, dataUpdate);
  res.status(200).json();
};

module.exports = {
  createUsuario,
  getUsuario,
  deleteUsuario,
  getUsuarios,
  updateUsuario,
};