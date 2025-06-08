// Importa o model que tem as funções que fazem a lógica com o banco
var pontuacaoModel = require('../models/graficoPontuacaoModel');

function graficoPontuacao(req, res) {
    var ID_USUARIO = req.params.idUsuario

    if (ID_USUARIO == undefined) {
        console.log('Id do usuario não encontrado')
    } else {
        pontuacaoModel.graficoPontuacao(ID_USUARIO)
        .then(
            function (resultado){
                res.json(resultado);
            }
        ).catch(
            function (erro){
                console.log(erro);
                console.log(
                        "\nHouve erro ao buscar dados do Grafico de Pontuação! ",
                        erro.sqlMessage
                    );
                    res.status(500).json(erro.sqlMessage);
            }
        )

    }
}

// Exporta as funções para uso nas rotas
module.exports = {
    graficoPontuacao
};
