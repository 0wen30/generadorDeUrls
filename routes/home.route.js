const express = require('express');
const {leerURLs,agregarURLs, eliminarURLs, actualizarURLs, modificarURLs, redireccionamiento} = require("../controllers/home.controller.js");
const urlValidar = require('../middlewares/urlValida.js');

const router = express.Router();

router.get("/",leerURLs);
router.get("/:shorturl",redireccionamiento);
router.get("/eliminar/:id",eliminarURLs);
router.get("/editar/:id",actualizarURLs);
router.post("/editar/:id",urlValidar,modificarURLs);
router.post("/",urlValidar,agregarURLs);

module.exports = router;
