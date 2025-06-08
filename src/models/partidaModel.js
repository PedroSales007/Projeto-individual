var database = require('../database/config');

function adicionarPartida(id, tempo, pontuacao) {
    var verificarSql = `SELECT * FROM quiz WHERE fkUsuario = ${id};`;

    return database.executar(verificarSql).then(resultado => {
        if (resultado.length > 0) {
            console.log(`Quiz com fkUsuario = ${id} já existe. Incrementando tentativas.`);
            var incrementarSql = `UPDATE quiz SET tentativas = tentativas + 1 WHERE fkUsuario = ${id};`;
            return database.executar(incrementarSql).then(() => {
                // Retorna o ID do quiz existente
                return resultado[0].idQuiz;
            });
        } else {
            console.log(`Quiz com fkUsuario = ${id} não existe. Criando novo...`);
            var criarSql = `INSERT INTO quiz (fkUsuario, tentativas) VALUES (${id}, 1);`;
            return database.executar(criarSql).then(resultadoInsert => {
                // Aqui obtemos o insertId do novo quiz criado
                return resultadoInsert.insertId;
            });
        }
    }).then(idQuiz => {
        // Agora com o idQuiz em mãos, inserimos a partida com os FKs corretos
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
