var database = require('../database/config');

function pucharKPI(ID_USUARIO) {
   console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function pucharKPI():", ID_USUARIO);

        var instrucaoSql = `
                     select q.tentativas as tentativa,
                        q.idQuiz as idQuiz,
                        truncate(avg(p.pontuacao), 0) as pontuacaoMedia,
                        truncate(avg(p.tempo), 0) as tempoMedio
                            from partida as p
                            join usuario as u 
                                on p.fkUsuario = u.idUsuario
                            join quiz as q 
                                on p.fkQuiz = q.idQuiz
                            where p.fkUsuario = ${ID_USUARIO}
                            group by q.idQuiz, q.tentativas;
                 `;
        console.log('Executando a instrução SQL: \n' + instrucaoSql);
        return database.executar(instrucaoSql);
}

// Exporta as funções para uso nas rotas
module.exports = {
    pucharKPI
};

