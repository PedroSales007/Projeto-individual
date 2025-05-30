var express = require("express");
var router = express.Router();

var pontuacao = require("../controllers/graficoPontuacaoController");

router.get("/graficoPontuacao/:idUsuario", function (req, res) {
    pontuacao.graficoPontuacao(req, res);
});

module.exports = router;