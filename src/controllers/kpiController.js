// Importa o model que tem as funções que fazem a lógica com o banco
var kpiModel = require('../models/kpiModel');

function pucharKPI(req, res) {
    var ID_USUARIO = req.params.ID_USUARIO;

    if (ID_USUARIO == undefined) {
        console.log('Id do usuário não encontrado')
    } else {
        kpiModel.pucharKPI(ID_USUARIO)
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
