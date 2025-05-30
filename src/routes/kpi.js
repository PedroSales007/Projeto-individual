var express = require("express");
var router = express.Router();

var kpi = require("../controllers/kpiController");

router.get("/pucharKPI/:idUsuario", function (req, res) {
    kpi.pucharKPI(req, res);
});

module.exports = router;