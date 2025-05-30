var express = require("express");
var router = express.Router();

var tempo = require("../controllers/graficoTempoController");

router.get("/graficoTempo/:idUsuario", function (req, res) {
    tempo.graficoTempo(req, res);
});

module.exports = router;