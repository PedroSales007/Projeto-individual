var database = require('../database/config');

function adicionarPartida(id, idQuiz, tempo, pontuacao) {
    console.log('Entrando no model');

    var instrucaoSql = `
        INSERT INTO partida (idUsuario, idQuiz, tempo, pontuacao)
        VALUES (${id}, ${idQuiz}, ${tempo}, ${pontuacao});
    `;

    console.log('Executando a instrução SQL: \n' + instrucaoSql);

    return database.executar(instrucaoSql);
}

function incrementarTentativa(idQuiz) {
    var instrucaoSql = `
        UPDATE quiz SET tentativas = tentativas + 1
        WHERE idQuiz = ${idQuiz};
    `;

    console.log('Executando a instrução SQL: \n' + instrucaoSql);

    return database.executar(instrucaoSql);
}

module.exports = {
    adicionarPartida,
    incrementarTentativa
};
