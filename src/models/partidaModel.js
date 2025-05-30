var database = require('../database/config');

function adicionarPartida(id, idQuiz, tempo, pontuacao) {
    var verificarSql = `SELECT * FROM quiz WHERE idQuiz = ${idQuiz};`;

    return database.executar(verificarSql).then(resultado => {
        if (resultado.length > 0) {
            console.log(`Quiz com id ${idQuiz} já existe. Incrementando tentativas.`);
            var incrementarSql = `UPDATE quiz SET tentativas = tentativas + 1 WHERE idQuiz = ${idQuiz};`;
            return database.executar(incrementarSql);
        } else {
            console.log(`Quiz com id ${idQuiz} não existe. Criando...`);
            var criarSql = `INSERT INTO quiz(idQuiz, tentativas) VALUES (${idQuiz}, 1);`;
            return database.executar(criarSql);
        }
    }).then(() => {
        var instrucaoSql = `
            INSERT INTO partida (fkUsuario, fkQuiz, tempo, pontuacao)
            VALUES (${id}, ${idQuiz}, ${tempo}, ${pontuacao});
        `;
        console.log('Executando a instrução SQL: \n' + instrucaoSql);
        return database.executar(instrucaoSql);
    }).catch(erro => {
        console.error("Erro ao registrar a partida: ", erro);
    });
}

module.exports = {
    adicionarPartida
};
