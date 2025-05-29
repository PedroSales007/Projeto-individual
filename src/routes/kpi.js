var express = require("express");
var router = express.Router();

var kpi = require("../controllers/kpiController");

//Recebendo os dados do html e direcionando para a função cadastrar de partida.js
router.post("/pucharKPI", function (req, res) {
    kpi.pucharKPI(req, res);
});

module.exports = router;