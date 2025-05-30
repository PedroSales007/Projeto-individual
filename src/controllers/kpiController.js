// Importa o model que tem as funções que fazem a lógica com o banco
var kpiModel = require('../models/kpiModel');


function pucharKPI(req, res) {
    var idUsuario = req.params.idUsuario

    if (idUsuario == undefined) {
        console.log('Id do usuario não encontrado')
    } else {
        kpiModel.pucharKPI(idUsuario)
        .then(
            function (resultado){
                res.json(resultado);
            }
        ).catch(
            function (erro){
                console.log(erro);
                console.log(
                        "\nHouve erro ao buscar dados das KPIs! ",
                        erro.sqlMessage
                    );
                    res.status(500).json(erro.sqlMessage);
            }
        )

    }
}



// Exporta as funções para uso nas rotas
module.exports = {
    pucharKPI
};
