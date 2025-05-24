var express = require("express");
var router = express.Router();

var partida = require("../controllers/adicionarPartida");

//Recebendo os dados do html e direcionando para a função cadastrar de partida.js
router.post("/adicionarPartida", function (req, res) {
    partida.adicionarPartida(req, res);
});

module.exports = router;