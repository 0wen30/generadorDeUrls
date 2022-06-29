const express = require('express');
const {leerURLs,agregarURLs} = require("../controllers/home.controller.js");

const router = express.Router();

router.get("/",leerURLs);
router.post("/",agregarURLs);

module.exports = router;