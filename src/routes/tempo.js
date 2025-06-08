var express = require("express");
var router = express.Router();

var tempo = require("../controllers/graficoTempoController");

router.get("/graficoTempo/:ID_USUARIO", function (req, res) {
    tempo.graficoTempo(req, res);
});

module.exports = router;