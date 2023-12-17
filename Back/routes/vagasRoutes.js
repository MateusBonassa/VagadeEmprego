const express = require("express");
const vagasController =require( "../controllers/vagasController.js");
const upload = require("../config/multer");
const rota = express.Router();

rota.get('/vagas', vagasController.buscaFiltrada);
rota.post('/cadastrar',upload.single("file"),vagasController.cadastrar);
rota.post('/testearq',upload.single("file"),vagasController.testeArq);

module.exports = rota;