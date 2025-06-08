// Importa o model que tem as funções que fazem a lógica com o banco
var tempoModel = require('../models/graficoTempoModel');

function graficoTempo(req, res) {
    var ID_USUARIO = req.params.ID_USUARIO
    

    if (ID_USUARIO == undefined) {
        console.log('Id do usuario não encontrado')
    } else {
        tempoModel.graficoTempo(ID_USUARIO)
        .then(
            function (resultado){
                res.json(resultado);
            }
        ).catch(
            function (erro){
                console.log(erro);
                console.log(
                        "\nHouve erro ao buscar dados do Grafico de Tempo! ",
                        erro.sqlMessage
                    );
                    res.status(500).json(erro.sqlMessage);
            }
        )

    }
}

// Exporta as funções para uso nas rotas
module.exports = {
    graficoTempo
};
