var database = require('../database/config');

function pucharKPI(idUsuario) {
    var idUsuario = req.params.idUsuario

    if (idUsuario == undefined) {
        console.log('Id do usuario não encontrado')
    } else {
        console.log('Dados capturados do Banco de Dados')
        var instrucaoSql = `
                     select q.tentativas as tentativa,
                        q.idQuiz as idQuiz,
                        truncate(avg(p.pontuacao), 0) as pontuacaoMedia,
                        truncate(avg(p.tempo), 0) as tempoMedia
                            from partida as p
                            join cadastro as c 
                                on p.fkUsuario = c.idCadastro
                            join quiz as q 
                                on p.fkQuiz = q.idQuiz
                            where p.fkUsuario = ${idUsuario}
                            group by q.idQuiz, q.tentativas;
                 `;
        console.log('Executando a instrução SQL: \n' + instrucaoSql);
        return database.executar(instrucaoSql);

    }
}

// Exporta as funções para uso nas rotas
module.exports = {
    pucharKPI
};

