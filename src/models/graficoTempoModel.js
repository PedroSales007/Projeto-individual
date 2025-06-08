var database = require('../database/config');

function  graficoTempo(ID_USUARIO) {
   console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function  graficoTempo():", ID_USUARIO);

        var instrucaoSql = `
                    SELECT TRUNCATE(p.tempo,1) AS tempo
	                    FROM partida AS p JOIN usuario AS u
		                    ON p.fkUsuario = u.idUsuario 
	                    JOIN quiz AS q 
		                    ON p.fkQuiz = q.idQuiz
	                    WHERE p.fkUsuario = ${ID_USUARIO};
                 `;
        console.log('Executando a instrução SQL: \n' + instrucaoSql);
        return database.executar(instrucaoSql);
}

// Exporta as funções para uso nas rotas
module.exports = {
     graficoTempo
};

