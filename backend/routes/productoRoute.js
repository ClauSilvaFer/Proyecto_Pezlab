const express = require("express");
const { createProducto, getProducto, deleteProducto, getProductos, updateProducto } = require("../controllers/productoController.js");

const router = express.Router();
router.post("/api/producto/create", createProducto);
router.get("/api/productos", getProductos);
router.get("/api/productos/:idProducto", getProducto);
router.delete("/api/producto/:idProducto", deleteProducto);
router.put("/api/producto/:idProducto", updateProducto);

module.exports = router;