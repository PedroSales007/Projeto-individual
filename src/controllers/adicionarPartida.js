// Importa o model que tem as funções que fazem a lógica com o banco
var partidaModel = require('../models/partidaModel');

// Função para adicionar partida e incrementar tentativas
function adicionarPartida(req, res) {
    // Recebe os dados do corpo da requisição
    var id = req.body.idServer;
    var tempo = req.body.tempoServer;
    var pontuacao = req.body.pontuacaoServer;
    var idQuiz = req.body.idQuizServer;

    // Primeiro insere a partida
    partidaModel.adicionarPartida(id, idQuiz, tempo, pontuacao)
        
}

// Exporta as funções para uso nas rotas
module.exports = {
    adicionarPartida
};
