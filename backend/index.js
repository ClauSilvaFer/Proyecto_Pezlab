const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const router = require("./routes/productoRoute.js");
const routerUser = require("./routes/usuarioRoute.js");



const app = express();
app.use(cors());

mongoose.connect("mongodb://127.0.0.1:27017/directory")
.then(() => console.log ("conexion correcta"))
.catch((e) => console.log (e));

app.use(express.json());
app.use(router);
app.use(routerUser);


app.listen(8080);