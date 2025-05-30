var database = require('../database/config');

function pucharKPI(idUsuario) {
   console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function pucharKPI():", idUsuario);

        var instrucaoSql = `
                     select q.tentativas as tentativa,
                        q.idQuiz as idQuiz,
                        truncate(avg(p.pontuacao), 0) as pontuacaoMedia,
                        truncate(avg(p.tempo), 0) as tempoMedio
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

// Exporta as funções para uso nas rotas
module.exports = {
    pucharKPI
};

